import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation';
import { ErrorBoundary } from 'react-error-boundary';
import CustomFallback from './src/components/CustomFallback';

const App = () => (
  <ErrorBoundary FallbackComponent={CustomFallback}>
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  </ErrorBoundary>
);

export default App;
