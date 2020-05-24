import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  NativeModules,
  TouchableOpacity,
  Image,
} from "react-native";
import PrimaryButton from "../Components/PrimaryButton";

const { width, height } = Dimensions.get("window");
const { StatusBarManager } = NativeModules;
let StatusBar = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default class EnableLocation extends React.Component {
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
            height: height / 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 320, height: 310, marginLeft: -50 }}
            source={require("../images/c-location.png")}
          />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 35,
            width: width,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                lineHeight: 55,
              }}
            >
              Enable your location
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 17,
                color: "rgba(0,0,0,0.5)",
              }}
            >
              To search for the best nearby vendors, we {"\n"}need to know your
              current location
            </Text>
          </View>
          <PrimaryButton
            onPress={() => this.props.navigation.navigate("HomeScreen")}
            background="#fb4e4e"
            text="Use current location"
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomeScreen")}
            style={{}}
          >
            <Text
              style={{
                color: "#52575C",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Skip for now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar + 70,
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
