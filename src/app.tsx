import React from 'react';
import { ThemeProviderComponent } from 'core/theme';
import { RouterComponent } from 'core/router';
import { ApolloProvider } from '@apollo/client';
import { client } from 'core/apollo-client';

const App: React.FunctionComponent = () => {
  return <RouterComponent />;
};

const AppProviders: React.FunctionComponent = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProviderComponent>
        <App />
      </ThemeProviderComponent>
    </ApolloProvider>
  );
};

export default AppProviders;
