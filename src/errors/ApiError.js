export default class ApiError extends Error {
  status;
  errors;

  constructor(message, status, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static badRequest(message, errors = []) {
    return new ApiError(message, 400, errors);
  }

  static notFound(message = 'Not Found', errors = []) {
    return new ApiError(message, 404, errors);
  }
}
