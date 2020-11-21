import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  NativeModules,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Rate from "../Components/Rating";

const { width, height } = Dimensions.get("window");
const { StatusBarManager } = NativeModules;
let StatusBar = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default function Categories(props) {
  let categoryData = [
    {
      id: 1,
      name: "Milktea",
      icon: "ios-pint",
      stores: 20,
      color: "#FB4E4E",
    },
    {
      id: 2,
      name: "Drink",
      icon: "ios-beer",
      stores: 20,
      color: "#7c4efb",
    },
    {
      id: 3,
      name: "Vege",
      icon: "ios-nutrition",
      stores: 20,
      color: "#00b16d",
    },
    {
      id: 4,
      name: "Pizza",
      icon: "ios-pizza",
      stores: 20,
      color: "tomato",
    },
    {
      id: 5,
      name: "Grill",
      icon: "ios-bonfire",
      stores: 20,
      color: "#ffbf0f",
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
          marginTop: 10,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons
            color="#52575c"
            style={{ padding: 10 }}
            size={20}
            name="ios-arrow-back"
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: width - 80,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#52575c" }}>
            Categories
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          width: width,
          flex: 1,
          padding: 17,
        }}
      >
        <SafeAreaView>
          <FlatList
            vertical={true}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            data={categoryData}
            renderItem={({ item }) => (
              <View
                style={{
                  width: 100,
                  backgroundColor: item.color,
                  borderRadius: 15,
                  height: 115,
                  // marginRight: 10,
                  padding: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 7,
                }}
              >
                <Ionicons
                  color="white"
                  style={{ marginBottom: 5 }}
                  size={50}
                  name={item.icon}
                />
                <Text style={{ color: "white", fontSize: 12 }}>
                  {item.name}
                </Text>
                <Text style={{ color: "white", fontSize: 10 }}>
                  {item.stores} Places
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar + 10,
    backgroundColor: "#eee",
  },
});
