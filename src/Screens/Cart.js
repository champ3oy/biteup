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
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const { StatusBarManager } = NativeModules;
let StatusBar = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let Menu = [
      {
        id: 1,
        image: require("../images/restaurants/15.jpg"),
        name: "Sweet Donut",
        tag: "Western cuisine, Fast Food, burger",
        price: "20.00",
      },
      {
        id: 2,
        image: require("../images/restaurants/16.jpg"),
        name: "Star French Fries",
        tag: "Western cuisine, Fast Food, burger",
        price: "25.00",
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
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
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
            <Text
              style={{ fontWeight: "bold", fontSize: 20, color: "#52575c" }}
            >
              My cart
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              marginBottom: 10,
            }}
          >
            <FlatList
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    width: "90%",
                    backgroundColor: "#eee",
                    height: 2,
                    marginHorizontal: 20
                  }}
                />
              )}
              data={Menu}
              renderItem={({ item }) => (
                <View
                  onPress={() => {
                    this.setState({ showModal: true });
                  }}
                  style={{
                    padding: 8,
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    width: width,
                    paddingHorizontal: 20,
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: "#a0a4a8",
                        fontSize: 12,
                        marginBottom: 10,
                      }}
                    >
                      {item.tag}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "#fb4e4e",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      &cent; {item.price}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
        <View style={{ width: width, paddingHorizontal: 20 }}>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", paddingVertical: 3 }}
            >
              Subtotal
            </Text>
            <Text
              style={{ fontSize: 16, paddingVertical: 3 }}
            >
              &cent; 45.00
            </Text>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", paddingVertical: 3 }}
            >
              Service fee
            </Text>
            <Text
              style={{ fontSize: 16, paddingVertical: 3 }}
            >
              &cent; 0.50
            </Text>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", paddingVertical: 3 }}
            >
              Delivery
            </Text>
            <Text
              style={{ fontSize: 16, paddingVertical: 3 }}
            >
              &cent; 5.00
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Payment")}
            style={[
              styles.continueButton,
              {
                backgroundColor: "#fb4e4e",
                marginTop: 20,
              },
            ]}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Submit order
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>
                  &cent; 50.50
                </Text>
              </View>
              <Feather color="white" size={25} name="chevron-right" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar + 10,
    backgroundColor: "#fafafa",
  },
  continueButton: {
    backgroundColor: "#fb4e4e",
    width: "100%",
    paddingVertical: 17,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
