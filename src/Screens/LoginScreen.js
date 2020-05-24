import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  NativeModules,
  TouchableOpacity,
} from "react-native";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import { TouchableOpacity as RNGHTouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const { StatusBarManager } = NativeModules;
let StatusBar = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: width,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 100,
            zIndex: 100,
          }}
        >
          <Text style={{ fontSize: 50, fontWeight: "bold", color: "white" }}>
            upBite
          </Text>
        </View>
        <View style={styles.container}>
          <ScrollBottomSheet // If you are using TS, that'll infer the renderItem `item` type
            componentType="FlatList"
            snapPoints={[150, "50%", height - 450]}
            initialSnapIndex={1}
            renderHandle={() => (
              <View style={styles.header}>
                <View style={styles.panelHandle} />
              </View>
            )}
            data={[{ id: 1 }]}
            keyExtractor={(id) => id}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.item}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    lineHeight: 35,
                  }}
                >
                  Hi, Nice to Meet You!
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    color: "rgba(0,0,0,0.5)",
                  }}
                >
                  We've tried to find a way to add more {"\n"}feebback and
                  dynamics into process
                </Text>
                <View style={{ marginTop: 15 }}>
                  <RNGHTouchableOpacity style={styles.continueButton}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      Connect with Google
                    </Text>
                  </RNGHTouchableOpacity>
                  <RNGHTouchableOpacity
                    onPress={() => this.props.navigation.navigate("Signup")}
                    style={[
                      styles.continueButton,
                      { backgroundColor: "#353fdf" },
                    ]}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      Connect with Email
                    </Text>
                  </RNGHTouchableOpacity>
                </View>

                <Text
                  style={{
                    fontSize: 17,
                    color: "rgba(0,0,0,0.5)",
                    marginTop: 15,
                  }}
                >
                  Already have an account
                </Text>
                <RNGHTouchableOpacity
                  onPress={() => this.props.navigation.navigate("Signin")}
                  style={[
                    styles.continueButton,
                    { backgroundColor: "#52575C" },
                  ]}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    Sign In
                  </Text>
                </RNGHTouchableOpacity>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      color: "rgba(0,0,0,0.5)",
                      textAlign: "center",
                    }}
                  >
                    By Signing up to{" "}
                    <Text style={{ color: "#fb4e4e", fontWeight: "bold" }}>
                      upBite
                    </Text>{" "}
                    you have agreed to our
                  </Text>
                  <RNGHTouchableOpacity>
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#A0A4A8",
                        fontSize: 18,
                      }}
                    >
                      Terms and Conditions
                    </Text>
                  </RNGHTouchableOpacity>
                </View>
              </View>
            )}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar,
    backgroundColor: "#fb4e4e",
  },
  contentContainerStyle: {
    padding: 16,
    backgroundColor: "white",
  },
  header: {
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHandle: {
    width: 40,
    height: 5,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 4,
  },
  item: {
    marginVertical: 10,
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
});
