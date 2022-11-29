export default function AccessDenied() {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <a href="/api/auth/sign-in">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            You must be signed in to view this page
          </button>
        </a>
      </p>
    </>
  );
}
