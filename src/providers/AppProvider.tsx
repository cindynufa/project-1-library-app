import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClientProvider: QueryClient = new QueryClient();

type QueryClientProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: QueryClientProviderProps) => {
  return (
    <QueryClientProvider client={queryClientProvider}>
      {children}
    </QueryClientProvider>
  );
};

export default AppProvider;
