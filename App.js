import * as React from "react";
import { AsyncStorage, View } from "react-native";
import AwesomeLoader from "rn-awesome-loader";
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
import CategoryList from "./src/Screens/CategoryList";
import MyOrders from "./src/Screens/MyOrders";
import Search from "./src/Screens/Search";

const Stack = createStackNavigator();

const Loading = (props) => {
  async function getOnboard (){
    console.log('loaing Sc')
    let value = await AsyncStorage.getItem("@skipOnboardingUPBITE");

    if (value == "true") {
      props.navigation.navigate("LoginScreen");
    } else {
      props.navigation.navigate("Onboarding");
    }
  };

  getOnboard();

  return (
    <View style={{ backgroundColor: "#fb4e4e", flex: 1, width: "100%" }}>
      <AwesomeLoader />
    </View>
  );
};

const MyStack = () => {
    return (
      <Stack.Navigator initialRouteName="Loading" headerMode="none">
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="EnableLocation" component={EnableLocation} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ScrollScreen" component={ScrollScreen} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="CategoryList" component={CategoryList} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="Search" component={Search} />
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
