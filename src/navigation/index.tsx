import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pages } from '../enums/Pages';
import routes from './routes';
import noHeaderOptions from './options/noHeaderOptions';
import termsOfServiceOptions from './options/termsOfServiceOptions';

export type RootStackParams = {
  [Pages.CREATE_ACCOUNT]: undefined;
  [Pages.TERMS_OF_SERVICE]: undefined;
  [Pages.LINK_BANK]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const MainNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Pages.CREATE_ACCOUNT}
        component={routes[Pages.CREATE_ACCOUNT]}
        options={noHeaderOptions}
      />
      <RootStack.Screen
        name={Pages.TERMS_OF_SERVICE}
        component={routes[Pages.TERMS_OF_SERVICE]}
        options={termsOfServiceOptions}
      />
      <RootStack.Screen
        name={Pages.LINK_BANK}
        component={routes[Pages.LINK_BANK]}
        options={noHeaderOptions}
      />
    </RootStack.Navigator>
  );
};

export default MainNavigation;
