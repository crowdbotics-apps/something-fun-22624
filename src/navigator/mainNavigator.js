import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps173204Navigator from '../features/Maps173204/navigator';
import Additem173203Navigator from '../features/Additem173203/navigator';
import Maps173199Navigator from '../features/Maps173199/navigator';
import UserProfile173195Navigator from '../features/UserProfile173195/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps173204: { screen: Maps173204Navigator },
Additem173203: { screen: Additem173203Navigator },
Maps173199: { screen: Maps173199Navigator },
UserProfile173195: { screen: UserProfile173195Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
