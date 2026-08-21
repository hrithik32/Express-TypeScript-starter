export interface AppError extends Error {
  statusCode: number;
}
export class internalServerError implements AppError {
  name: string;
  statusCode: number;
  message: string;
  constructor(message: string) {
    this.name = "InternalServerError";
    this.statusCode = 500;
    this.message = message;
  }
}

export class badRequestError implements AppError {
  name: string;
  statusCode: number;
  message: string;
  constructor(message: string) {
    this.name = "BadRequestError";
    this.statusCode = 400;
    this.message = message;
  }
}
export class notFoundError implements AppError {
  name: string;
  statusCode: number;
  message: string;
  constructor(message: string) {
    this.name = "NotFoundError";
    this.statusCode = 404;
    this.message = message;
  }
}
