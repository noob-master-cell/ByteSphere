import Post from "../../models/post.model.js";
import { errorHandler } from "../utils/error.js";

export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed to create a post"));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, "Please provide all required fields"));
  }
  const makeSlug = (str) =>
    str
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");

  const { title, content, category, image } = req.body;
  let slug = makeSlug(title);

  try {
    // If slug exists, append a short random suffix
    const exists = await Post.exists({ slug });
    if (exists) {
      slug = `${slug}-${Math.random().toString(36).slice(2, 8)}`;
    }

    const newPost = new Post({
      title,
      content,
      category,
      image,
      slug,
      userId: req.user.id,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    // Handle rare duplicate key race: retry once with a different suffix
    if (error && error.code === 11000 && error.keyPattern && error.keyPattern.slug) {
      try {
        const retryPost = new Post({
          title,
          content,
          category,
          image,
          slug: `${slug}-${Math.random().toString(36).slice(2, 8)}`,
          userId: req.user.id,
        });
        const savedRetry = await retryPost.save();
        return res.status(201).json(savedRetry);
      } catch (retryErr) {
        return next(retryErr);
      }
    }
    next(error);
  }
};

export const getposts = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    const filter = {
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.postId && { _id: req.query.postId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: "i" } },
          { content: { $regex: req.query.searchTerm, $options: "i" } },
        ],
      }),
    };

    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const [posts, totalPosts, lastMonthPosts] = await Promise.all([
      Post.find(filter)
        .sort({ updatedAt: sortDirection })
        .skip(startIndex)
        .limit(limit)
        .populate("upvotes", "username")
        .populate("downvotes", "username"),
      Post.countDocuments(filter),
      Post.countDocuments({ ...filter, createdAt: { $gte: oneMonthAgo } }),
    ]);

    res.status(200).json({ posts, totalPosts, lastMonthPosts });
  } catch (error) {
    next(error);
  }
};

export const deletepost = async (req, res, next) => {
  if (!req.user.isAdmin && req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to delete this post"));
  }
  try {
    await Post.findByIdAndDelete(req.params.postId);
    res.status(200).json("The post has been deleted");
  } catch (error) {
    next(error);
  }
};

export const updatepost = async (req, res, next) => {
  if (!req.user.isAdmin && req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this post"));
  }
  try {
    const { title, content, category, image } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      {
        $set: {
          title,
          content,
          category,
          image,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};

export const upvote = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return next(errorHandler(404, "Post not found"));
    }

    const userId = req.user.id;
    const hasUpvoted = post.upvotes.some((id) => id.toString() === userId);
    // Always remove from both arrays first to maintain invariants
    await Post.findByIdAndUpdate(post._id, {
      $pull: { upvotes: userId, downvotes: userId },
    });

    // If it wasn't previously upvoted, add it
    if (!hasUpvoted) {
      await Post.findByIdAndUpdate(post._id, { $addToSet: { upvotes: userId } });
    }

    const updated = await Post.findById(post._id)
      .populate("upvotes", "username")
      .populate("downvotes", "username");
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

export const downvote = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return next(errorHandler(404, "Post not found"));
    }

    const userId = req.user.id;
    const hasDownvoted = post.downvotes.some((id) => id.toString() === userId);
    // Always remove from both arrays first to maintain invariants
    await Post.findByIdAndUpdate(post._id, {
      $pull: { upvotes: userId, downvotes: userId },
    });

    // If it wasn't previously downvoted, add it
    if (!hasDownvoted) {
      await Post.findByIdAndUpdate(post._id, { $addToSet: { downvotes: userId } });
    }

    const updated = await Post.findById(post._id)
      .populate("upvotes", "username")
      .populate("downvotes", "username");
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};
