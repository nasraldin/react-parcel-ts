// TODO: need to be refectory

import { LogLevel, log } from '~logger';
export const nodeEnv = process.env.NODE_ENV || 'production';

export const createSuccessResponse = (code = 200, data = {}) => ({
  status: 'success',
  statusCode: code,
  data,
});

export const createFailResponse = (
  code = 400,
  message = 'Bad Request',
  data = {},
  error = {},
  returnErrorBody = false,
) => {
  log(message, undefined, LogLevel.Error, undefined, error);

  return {
    status: 'fail',
    statusCode: code,
    message,
    data,
    ...(nodeEnv === 'development' || returnErrorBody ? { error } : {}),
  };
};

export const createAccessDeniedResponse = (
  error = {},
  message = 'Do Not Have Permission',
  code = 403,
  returnErrorBody = false,
) => {
  log(message, undefined, LogLevel.Error, undefined, error);

  return {
    status: 'fail',
    statusCode: code,
    message,
    ...(nodeEnv === 'development' || returnErrorBody ? { error } : {}),
  };
};

export const createErrorResponse = (
  code = 500,
  message = 'Internal Server Error',
  error = {},
  returnErrorBody = false,
) => {
  log(message, undefined, LogLevel.Error, undefined, error);

  return {
    status: 'error',
    statusCode: code,
    message,
    ...(nodeEnv === 'development' || returnErrorBody ? { error } : {}),
  };
};

export const createResponse = (
  // request: Request,
  // response: Response,
  code: number,
  message: string,
  data: object | undefined,
  error: object = {},
  returnErrorBody = false,
): void => {
  if (code >= 200 && code < 300) {
    createSuccessResponse(code, data);
  } else if (code === 403) {
    createAccessDeniedResponse();
  } else if (code >= 400 && code < 500) {
    createFailResponse(code, message, data, error, returnErrorBody);
  } else {
    createErrorResponse(code, message, data || error, returnErrorBody);
  }
};
