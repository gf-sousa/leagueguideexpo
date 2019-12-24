import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import AboutScreen from "../screens/AboutScreen";
import StarterScreen from "../screens/StarterScreen";
import GlossarioScreen from "../screens/GlossarioScreen";

const config = Platform.select({});

const AboutStack = createStackNavigator(
  {
    Sobre: AboutScreen
  },
  config
);

AboutStack.navigationOptions = {
  tabBarLabel: "About",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

AboutStack.path = "";

const StarterStack = createStackNavigator(
  {
    Starter: StarterScreen
  },
  config
);

StarterStack.navigationOptions = {
  tabBarLabel: "Starter",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-play" : "md-play"}
    />
  )
};

StarterStack.path = "";

const GlossarioStack = createStackNavigator(
  {
    Glossario: GlossarioScreen
  },
  config
);

GlossarioStack.navigationOptions = {
  tabBarLabel: "Glossário",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-journal" : "md-journal"}
    />
  )
};

GlossarioStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    GlossarioStack,
    StarterStack,
    AboutStack
  },
  {
    initialRouteName: "AboutStack",
    swipeEnabled: true,
    lazyLoad: true,
    tabBarOptions: {
      tinColor: "#fff",
      activeTintColor: "#eee",
      inactiveTintColor: "#fff",
      showIcon: true,
      showLabel: true,
      lazyLoad: true,
      upperCaseLabel: false,
      indicatorStyle: {
        backgroundColor: "#432751"
      },
      style: {
        backgroundColor: "rgb(26, 0, 39)",
        borderTopWidth: 3,
        position: "relative"
      }
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
