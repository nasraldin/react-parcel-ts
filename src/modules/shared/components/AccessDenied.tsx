import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function AccessDenied() {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <Link href="/api/auth/signin" passHref>
          <button
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            You must be signed in to view this page
          </button>
        </Link>
      </p>
    </>
  );
}
