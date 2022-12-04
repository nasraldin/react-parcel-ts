import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <div id="error-page">
      {/* <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p> */}
      <p>
        {/* <i>{error.statusText || error?.message}</i> */}
        <i>
          {isRouteErrorResponse(error) ? (
            <div>
              <h1>Oops!</h1>
              <h2>{error.status}</h2>
              <p>{error.statusText}</p>
              {error.data?.message && <p>{error.data.message}</p>}
            </div>
          ) : (
            <div>Oops</div>
          )}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
