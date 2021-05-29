import * as Sentry from "@sentry/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AuthProvider from "../auth/contexts/AuthProvider";
import Loader from "../core/components/Loader";
import QueryWrapper from "../core/components/QueryWrapper";
import SettingsProvider from "../core/contexts/SettingsProvider";
import SnackbarProvider from "../core/contexts/SnackbarProvider";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
  });
}

type AppProviderProps = {
  children: React.ReactNode;
};

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      suspense: true,
    },
  },
});

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Sentry.ErrorBoundary fallback={"An error has occurred"}>
        <QueryClientProvider client={queryClient}>
          <SettingsProvider>
            <QueryWrapper>
              <SnackbarProvider>
                <AuthProvider>{children}</AuthProvider>
              </SnackbarProvider>
            </QueryWrapper>
          </SettingsProvider>
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </Sentry.ErrorBoundary>
    </React.Suspense>
  );
};

export default AppProvider;
