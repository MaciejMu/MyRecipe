type AppError = {
  message: string;
  statusCode: number;
  status: string;
  isOperational: boolean;
};

const createAppError = (message: string, statusCode: number) => {
  const status = `${statusCode}`.startsWith("4") ? "fail" : "error";
  const appError: AppError = {
    message,
    statusCode,
    status,
    isOperational: true,
  };

  return appError;
};

export default createAppError;
