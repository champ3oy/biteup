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
  ScrollView,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import PrimaryButton from "../Components/PrimaryButton";
import PrimaryInput from "../Components/PrimaryInput";

const { width, height } = Dimensions.get("window");
const { StatusBarManager } = NativeModules;
let StatusBar = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

import GLOBAL from "./Global";

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: {},
      momoNumber: "",
      paymentDetails: {},
      addressL1: "",
      addressL2: "",
      order: [],
    };
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
              Payment method
            </Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: width, paddingHorizontal: 20 }}>
            <TouchableOpacity
              onPress={() =>
                this.setState({ method: { type: "CASH_ON_DELIVERY" } })
              }
              style={[
                styles.continueButton,
                {
                  backgroundColor: "white",
                  marginTop: 5,
                },
              ]}
            >
              <Text
                style={{
                  color: "#52575c",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Cash
              </Text>
              {this.state.method.type == "CASH_ON_DELIVERY" ? (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    borderWidth: 1.5,
                    borderColor: "#fb4e4e",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 30,
                      backgroundColor: "#fb4e4e",
                    }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    borderWidth: 1.5,
                    borderColor: "#A0A4A8",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width,
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "100%",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  this.setState({ method: { type: "CARD_OR_MOMO" } })
                }
                style={[
                  styles.continueButton,
                  {
                    backgroundColor: "white",
                    marginTop: 3,
                  },
                ]}
              >
                <Text
                  style={{
                    color: "#52575c",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Mobile Money
                </Text>
                {this.state.method.type == "CARD_OR_MOMO" ? (
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      borderWidth: 1.5,
                      borderColor: "#fb4e4e",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 30,
                        backgroundColor: "#fb4e4e",
                      }}
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      borderWidth: 1.5,
                      borderColor: "#A0A4A8",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                )}
              </TouchableOpacity>

              <View style={[styles.continueButton2, { marginTop: -1 }]}>
                <PrimaryInput
                  onTextChange={(val) => this.setState({ momoNumber: val })}
                  placeholder="MoMo number"
                />
              </View>
              {/* <SafeAreaView style={{ marginLeft: 20, height: 350 }}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={[{ id: 1 }, { id: 2 }]}
                  horizontal={true}
                  renderItem={({ item }) => (
                    <View
                      style={[
                        styles.visa,
                        {
                          width: width - 100,
                          height: 350,
                          backgroundColor: "tomato",
                          borderRadius: 15,
                          marginBottom: 10,
                          marginRight: 15,
                          padding: 20,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          color: "rgba(255,255,255, 0.5)",
                          marginBottom: 5,
                        }}
                      >
                        Visa Card
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          color: "white",
                          marginBottom: 15,
                        }}
                      >
                        **** **** ***** 9773
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: "rgba(255,255,255, 0.5)",
                          marginBottom: 5,
                        }}
                      >
                        Card Holder
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          color: "white",
                          marginBottom: 15,
                        }}
                      >
                        Selorm Akoto
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: "rgba(255,255,255, 0.5)",
                          marginBottom: 5,
                        }}
                      >
                        Expires
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: "bold",
                          color: "white",
                          marginBottom: 15,
                        }}
                      >
                        08/22
                      </Text>
                      <View />
                    </View>
                  )}
                  keyExtractor={(item) => item.id}
                />
              </SafeAreaView> */}
              {/* <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                  marginBottom: 5,
                }}
              >
                <Ionicons
                  color="#fb4e4e"
                  style={{ paddingRight: 10, paddingTop: 5 }}
                  size={20}
                  name="ios-add"
                />
                <Text
                  style={{ color: "#fb4e4e", fontWeight: "bold", fontSize: 15 }}
                >
                  Add a new card
                </Text>
              </View> */}
            </View>
          </View>

          <View
            style={{
              width: width,
              paddingHorizontal: 20,
              marginTop: 15,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "100%",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => alert("get location")}
                style={[
                  styles.continueButton,
                  {
                    backgroundColor: "white",
                    marginTop: 3,
                  },
                ]}
              >
                <Text
                  style={{
                    color: "#52575c",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Delivery Address
                </Text>
                <Feather name="map-pin" size={25} color="#a0a4a8" />
              </TouchableOpacity>

              <View style={[styles.continueButton2, { marginTop: -1 }]}>
                <PrimaryInput
                  onTextChange={(val) => this.setState({ addressL1: val })}
                  placeholder="Address line 1"
                />
              </View>
              <View
                style={[
                  styles.continueButton2,
                  { marginTop: -1, marginBottom: 10 },
                ]}
              >
                <PrimaryInput
                  onTextChange={(val) => this.setState({ addressL2: val })}
                  placeholder="Address line 2"
                />
              </View>
            </View>
          </View>

          <View style={{ width: width, paddingHorizontal: 20 }}>
            <PrimaryButton
              onPress={async () => {
                await this.setState({
                  paymentDetails: {
                    method: this.state.method.type,
                    momoNumber: this.state.momoNumber,
                    address: {
                      line1: this.state.addressL1,
                      line2: this.state.addressL2,
                    },
                    orderDetails: GLOBAL.cart.state.cart,
                  },
                });

                GLOBAL.cart.setState({
                  paymentDetails: {
                    method: this.state.method.type,
                    momoNumber: this.state.momoNumber,
                    address: {
                      line1: this.state.addressL1,
                      line2: this.state.addressL2,
                    },
                    orderDetails: [
                      ...this.state.paymentDetails.orderDetails
                    ],
                  },
                });

                this.props.navigation.navigate("HomeScreen");
              }}
              text="Done"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar + 10,
    backgroundColor: "#eee",
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
  continueButton2: {
    backgroundColor: "#fafafa",
    width: "90%",
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical: 10,
  },
});
