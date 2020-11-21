import React from "react";
import { View, Text, StyleSheet, Platform, NativeModules } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import PrimaryInput from "../Components/PrimaryInput";

const { StatusBarManager } = NativeModules;
let StatusBar = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default function Signin(props) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          lineHeight: 45,
        }}
      >
        Login
      </Text>
      <Text
        style={{
          fontSize: 17,
          color: "rgba(0,0,0,0.5)",
        }}
      >
        Please sign in to use our services {"\n"}Enter your email and password
        process
      </Text>
      <View style={{ marginTop: 15 }}>
        <View style={[styles.continueButton2, { marginTop: -1 }]}>
          <PrimaryInput placeholder="Enter your email" />
        </View>
        <View style={[styles.continueButton2, { marginTop: -1 }]}>
          <PrimaryInput placeholder="Enter your password" />
        </View>
        <PrimaryButton
          onPress={() => props.navigation.navigate("EnableLocation")}
          text="Sign in"
        />
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#52575c",
            textAlign: "center",
          }}
        >
          OR
        </Text>
      </View>
      <PrimaryButton background="#52575C" text="Sign up with Google" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar + 50,
    backgroundColor: "#eee",
    paddingHorizontal: 15,
  },
  continueButton: {
    backgroundColor: "#fb4e4e",
    width: "100%",
    paddingVertical: 17,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  continueButton2: {
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 17,
    borderRadius: 15,
    // justifyContent: "center",
    // alignItems: "center",
    marginVertical: 10,
  },
});
