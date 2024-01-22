export type TError = {
  success: false;
  statusCode: number;
  name: string;
  message: string;
  errorDetails: {
    path: string;
    message: string;
  };
  error?: unknown;
  stack?: unknown;
};
