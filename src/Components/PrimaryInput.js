import * as React from "react";
import { TextInput } from "react-native";

export default function PrimaryInput(props) {
  return (
    <TextInput
      style={{
        height: 25,
        paddingHorizontal: 15,
        marginRight: 10,
        fontSize: 20,
      }}
      placeholder={props.placeholder}
      onTextChange={props.onTextChange}
    />
  );
}
