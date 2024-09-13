"use client";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
};

export const ErrorBoundaryProvider: React.FC<Props> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>Please try again later.</p>
    </div>
  );
};
