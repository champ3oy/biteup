import * as React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Primarybutton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.continueButton,
        {
          backgroundColor: props.background ? props.background : "#fb4e4e",
          marginTop: 20,
        },
      ]}
    >
      <Text
        style={{
          color: props.color ? props.color : "white",
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
