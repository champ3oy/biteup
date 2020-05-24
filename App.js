import * as React from "react";
import {Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./src/Screens/Onboarding";
import LoginScreen from "./src/Screens/LoginScreen";
import Signin from "./src/Screens/Signin";
import Signup from "./src/Screens/Signup";
import EnableLocation from "./src/Screens/EnableLocation";
import HomeScreen from "./src/Screens/HomeScreen";
import ScrollScreen from "./src/Screens/ScrollScreen";
import Categories from "./src/Screens/Categories";
import Shop from "./src/Screens/Shop";
import Cart from "./src/Screens/Cart";
import Payment from "./src/Screens/Payment";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      headerMode="none"
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        name="EnableLocation"
        component={EnableLocation}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="ScrollScreen"
        component={ScrollScreen}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
      />
      <Stack.Screen
        name="Shop"
        component={Shop}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
