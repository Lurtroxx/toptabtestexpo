/* eslint-disable import/no-cycle */

// @ts-ignore TS(2307): Assets are from Javascript files
import { EventSVG, SpotsSVG } from '../assets/SVG';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabTwoScreen from './TabTwoScreen';
import TabThreeScreen from './TabThreeScreen';
import TabFourScreen from './TabFourScreen';

const HomeTab = createMaterialTopTabNavigator();

export default function TabOneScreen({ navigation }) {
  return (
    <HomeTab.Navigator
      sceneContainerStyle={{
        backgroundColor: "#fff",
      }}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === 'SpotsTab') {
            return (
              <SpotsSVG
              />
            );
          } else if (route.name === 'EventsTab') {
            return (
              <EventSVG
              />
            );
          }
        },
      })}
    >
      <HomeTab.Screen
        name='SpotsTab'
        component={TabThreeScreen}
      />
      <HomeTab.Screen
        name='EventsTab'
        component={TabFourScreen}
      />
    </HomeTab.Navigator>
  );
};
