// ErrorBoundary.js
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function MyErrorBoundary({ children }) {
  function onError(error, info) {
    // Handle the error, e.g., log it, send it to a service, or show a user-friendly error message
    console.error(error);
  }

  return <ErrorBoundary FallbackComponent={ErrorFallback} onError={onError}>{children}</ErrorBoundary>;
}

function ErrorFallback({ error }) {
  // Customize the error message or UI to display to the user
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default MyErrorBoundary;