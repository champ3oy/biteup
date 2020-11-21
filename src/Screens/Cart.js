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

import GLOBAL from "./Global";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subTotal: 0,
      delivery: 5,
      serviceFee: 0.5,
      orderDetails: {}
    };
  }

  componentDidMount() {
    console.log(GLOBAL.cart.state.cart);
    let st = 0;
    GLOBAL.cart.state.cart.map((item) => {
      st += Number(item.price) * Number(item.qty);
    });
    this.setState({
      subTotal: Number(st),
    });
  }

  render() {
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
            {GLOBAL.cart.state.cart.length > 0 ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View
                    style={{
                      width: "90%",
                      backgroundColor: "#eee",
                      height: 2,
                      marginHorizontal: 20,
                    }}
                  />
                )}
                data={GLOBAL.cart.state.cart}
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
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          color: "#fb4e4e",
                          fontSize: 18,
                          fontWeight: "bold",
                          marginRight: 10,
                        }}
                      >
                        &cent; {item.price}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          var array = [...GLOBAL.cart.state.cart]; // make a separate copy of the array
                          var index = index;
                          if (index !== -1) {
                            array.splice(index, 1);
                            GLOBAL.cart.setState({ cart: array });
                          }
                          this.forceUpdate();
                          console.log(GLOBAL.cart.state.cart);
                        }}
                        style={{ padding: 5 }}
                      >
                        <Feather name="trash" color="red" size={15} />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                keyExtractor={(item) => item.id}
              />
            ) : (
              <View
                style={{
                  width: "100%",
                  paddingVertical: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, color: "#a0a4a8" }}>
                  No item added in Cart
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={{ width: width, paddingHorizontal: 20 }}>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                paddingVertical: 3,
                color: "#52575c",
              }}
            >
              Subtotal
            </Text>
            <Text style={{ fontSize: 16, paddingVertical: 3 }}>
              &cent; {Number(this.state.subTotal).toFixed(2)}
            </Text>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                paddingVertical: 3,
                color: "#52575c",
              }}
            >
              Service fee
            </Text>
            <Text style={{ fontSize: 16, paddingVertical: 3 }}>
              &cent; {Number(this.state.serviceFee).toFixed(2)}
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
              style={{
                fontSize: 16,
                fontWeight: "bold",
                paddingVertical: 3,
                color: "#52575c",
              }}
            >
              Delivery
            </Text>
            <Text style={{ fontSize: 16, paddingVertical: 3 }}>
              &cent; {Number(this.state.delivery).toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity
            // onPress={() => console.log(GLOBAL.cart.state.cart)}
            onPress={() => this.props.navigation.navigate("Payment", {item: this.state.orderDetails})}
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
                  &cent;{" "}
                  {this.state.subTotal
                    ? (Number(this.state.subTotal) +
                      Number(this.state.delivery) +
                      Number(this.state.serviceFee)).toFixed(2)
                    : "0.00"}
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
