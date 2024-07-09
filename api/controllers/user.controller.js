// Controller function to handle test endpoint
export const test = (req, res) => {
  // Sending a JSON response with a message indicating API functionality
  res.json({ message: "API is working !!" });
};
