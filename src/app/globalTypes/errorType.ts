export type TerrorDetail = {
  path: string;
  message: string;
};

export type TError = {
  success: false;
  statusCode: number;
  name: string;
  message: string;
  errorDetails: TerrorDetail[];
  error?: unknown;
  stack?: unknown;
};
