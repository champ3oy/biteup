import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  NativeModules,
  ScrollView,
  TextInput,
} from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import PrimaryInput from "../Components/PrimaryInput";

const { width, height } = Dimensions.get("window");
const { StatusBarManager } = NativeModules;
let StatusBar = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default function Signup() {
  return (
    <View style={styles.container}>
      <ScrollView showVerticalScroll={false}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            lineHeight: 45,
          }}
        >
          Sign up
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: "rgba(0,0,0,0.5)",
          }}
        >
          Please sign up to use our services {"\n"}Enter your email and password
          process to create an account
        </Text>
        <View style={{ marginTop: 15 }}>
          <View style={styles.continueButton2}>
            <PrimaryInput placeholder="Enter your name" />
          </View>
          <View style={[styles.continueButton2, { marginTop: -1 }]}>
            <PrimaryInput placeholder="Enter your email" />
          </View>
          <View style={[styles.continueButton2, { marginTop: -1 }]}>
            <PrimaryInput placeholder="Enter your password" />
          </View>
          <View
            style={[
              styles.continueButton2,
              { flexDirection: "row", paddingHorizontal: 15, marginTop: -1 },
            ]}
          >
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 30,
                backgroundColor: "#fb4e4e",
              }}
            />
            <TextInput
              style={{
                height: 25,
                paddingHorizontal: 10,
                marginRight: 10,
                borderRightWidth: 1,
                borderRightColor: "#cacccf",
                fontSize: 20,
              }}
              placeholder="+233"
            />
            <TextInput
              style={{
                height: 25,
                paddingHorizontal: 0,
                // marginLight: 5,/*  */
                fontSize: 20,
              }}
              placeholder="540930557"
            />
          </View>
          <PrimaryButton background="#fb4e4e" text="Sign up" />
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
      </ScrollView>
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
