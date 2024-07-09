/**
 * Creates and returns a new Error object with status code and message.
 * @param {number} statusCode - HTTP status code for the error.
 * @param {string} message - Error message describing the issue.
 * @returns {Error} - Error object with statusCode and message properties.
 */
export const errorHandler = (statusCode, message) => {
  const error = new Error(); // Create a new Error object
  error.statusCode = statusCode; // Set the statusCode property of the error
  error.message = message; // Set the message property of the error
  return error; // Return the created Error object
};
