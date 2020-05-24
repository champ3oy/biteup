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
  ImageBackground,
  ScrollView,
  Image,
  Modal,
  TouchableNativeFeedback,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import Rate from "../Components/Rating";
import { TextInput } from "react-native-gesture-handler";
import PrimaryButton from "../Components/PrimaryButton";

const { width, height } = Dimensions.get("window");
const { StatusBarManager } = NativeModules;
let StatusBar = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
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
        <ImageBackground
          source={require("../images/restaurants/14.jpg")}
          style={{
            width: width,
            height: 200,
            paddingTop: StatusBar + 10,
            zIndex: -100,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(0,0,0, 0.5)",
              width: width,
              height: 200,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </ImageBackground>

        <ScrollView style={{ height: height }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
              marginTop: 40,
              paddingHorizontal: 20,
              zIndex: 1000,
            }}
          >
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Ionicons color="white" size={20} name="ios-arrow-back" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Cart")}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fb4e4e",
                  borderRadius: 30,
                  // width: 50,/*  */
                  height: 30,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    borderRadius: 20,
                    width: 20,
                    height: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 2,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>0</Text>
                </View>
                <Feather color="white" size={15} name="shopping-cart" />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SafeAreaView
              style={{
                width: width - 40,
                //   height: 200,
                backgroundColor: "white",
                borderRadius: 20,
                padding: 10,
                marginTop: 40,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  // marginBottom: 20,
                  marginTop: 5,
                  paddingHorizontal: 20,
                }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "#fb4e4e",
                    }}
                  >
                    Menu
                  </Text>
                  <View
                    style={{
                      width: 25,
                      height: 4,
                      backgroundColor: "#fb4e4e",
                      borderRadius: 10,
                      marginTop: 5,
                    }}
                  ></View>
                </View>
              </View>
              <View style={{ marginTop: 15, paddingHorizontal: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Pizza Hut - Pizza Delivery
                </Text>
                <Text style={{ color: "#a0a4a8", fontSize: 12 }}>
                  Western cuisine, Fast Food, burger
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <Rate rate={3} />
                  <View
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: 10,
                      paddingVertical: 3,
                      alignItems: "center",
                      backgroundColor: "#eeee",
                      borderRadius: 20,
                    }}
                  >
                    <Feather
                      color="#FB4E4E"
                      style={{ marginRight: 3 }}
                      size={13}
                      name="clock"
                    />
                    <Text style={{ color: "#FB4E4E", fontSize: 12 }}>30'</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#fafafa",
                  width: width - 40,
                  marginLeft: -10,
                  marginBottom: -10,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  marginTop: 15,
                  paddingHorizontal: 20,
                }}
              >
                <FlatList
                  data={[
                    { id: 1, type: "promo" },
                    { id: 2, type: "discount" },
                  ]}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        width: "100%",
                        backgroundColor: "#eee",
                        height: 3,
                      }}
                    />
                  )}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        marginVertical: 10,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "#fb4e4e",
                          width: 40,
                          height: 40,
                          borderRadius: 15,
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: 10,
                        }}
                      >
                        {item.type == "discount" ? (
                          <Feather
                            color="white"
                            style={{ marginRight: 0 }}
                            size={25}
                            name="tag"
                          />
                        ) : (
                          <Feather
                            color="white"
                            style={{ marginRight: 0 }}
                            size={25}
                            name="box"
                          />
                        )}
                      </View>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 15,
                          color: "#52575c",
                        }}
                      >
                        Freship within 5km
                      </Text>
                    </View>
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </SafeAreaView>

            <View
              style={{
                width: width,
                paddingLeft: 20,
                marginTop: 20,
                marginBottom: 20,
                backgroundColor: "#eee",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#52575c",
                  marginBottom: 10,
                }}
              >
                Daily deals
              </Text>
              <View>
                <FlatList
                  showHorizontalSrollIndicator={false}
                  data={[{ id: 1 }, { id: 2 }]}
                  horizontal={true}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        width: width - 120,
                        borderRadius: 15,
                        marginRight: 10,
                      }}
                    >
                      <View
                        style={{
                          width: "80%",
                          backgroundColor: "white",
                          borderRadius: 15,
                          marginRight: 10,
                          padding: 18,
                        }}
                      >
                        <TouchableNativeFeedback
                          onPress={() => {
                            this.setState({ showModal: true });
                          }}
                        >
                          <View>
                            <View style={{ width: "70%" }}>
                              <Text
                                style={{
                                  fontWeight: "bold",
                                  fontSize: 17,
                                  color: "#25282b",
                                }}
                              >
                                Happy Combo Burger
                              </Text>
                            </View>
                            <View style={{ marginVertical: 8 }}>
                              <Text style={{ fontSize: 10, color: "gray" }}>
                                In stock
                              </Text>
                              <Text
                                style={{
                                  fontSize: 15,
                                  fontWeight: "bold",
                                  color: "#fb4e4e",
                                }}
                              >
                                &cent; 25.00
                              </Text>
                            </View>
                            <View
                              style={{
                                width: 200,
                                height: 180,
                                // backgroundColor: "tomato",/*  */
                                marginBottom: 10,
                                marginLeft: 40,
                              }}
                            >
                              <Image
                                style={{ width: "100%", height: "100%" }}
                                source={require("../images/burger.png")}
                              />
                            </View>
                          </View>
                        </TouchableNativeFeedback>
                        <View
                          style={{
                            backgroundColor: "#fb4e4e",
                            width: 40,
                            height: 40,
                            borderRadius: 12,
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: 10,
                            marginTop: -30,
                          }}
                        >
                          <Feather
                            color="white"
                            style={{ marginRight: 0 }}
                            size={25}
                            name="plus"
                          />
                        </View>
                      </View>
                    </View>
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </View>
            <View style={{ width: width, backgroundColor: "#eee" }}>
              <View
                style={{
                  marginBottom: 10,
                  paddingTop: 20,
                }}
              >
                <FlatList
                  data={Menu}
                  renderItem={({ item }) => (
                    <>
                      <View
                        onPress={() => {
                          this.setState({ showModal: true });
                        }}
                        style={{
                          padding: 8,
                          flexDirection: "row",
                          paddingHorizontal: 20,
                        }}
                      >
                        <TouchableNativeFeedback
                          onPress={() => {
                            this.setState({ showModal: true });
                          }}
                        >
                          <Image
                            style={{
                              width: 80,
                              height: 80,
                              borderRadius: 90,
                              marginRight: 10,
                            }}
                            source={item.image}
                          />
                        </TouchableNativeFeedback>
                        <View style={{ marginTop: 8 }}>
                          <TouchableNativeFeedback
                            onPress={() => {
                              this.setState({ showModal: true });
                            }}
                          >
                            <View>
                              <Text
                                style={{ fontWeight: "bold", fontSize: 18 }}
                              >
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
                          </TouchableNativeFeedback>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              width: "70%",
                            }}
                          >
                            <Text
                              style={{
                                color: "#fb4e4e",
                                fontSize: 18,
                                fontWeight: "bold",
                              }}
                            >
                              &cent; {item.price}
                            </Text>
                            <View
                              style={{
                                backgroundColor: "#fb4e4e",
                                width: 30,
                                height: 30,
                                borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: 20,
                              }}
                            >
                              <Feather
                                color="white"
                                style={{ marginRight: 0 }}
                                size={15}
                                name="plus"
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                    </>
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </View>
            <View style={{ paddingHorizontal: 20, width: width }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Cart")}
                style={[
                  styles.continueButton,
                  {
                    backgroundColor: "#fb4e4e",
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
                  My cart
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.5)",
                      borderRadius: 20,
                      width: 25,
                      height: 25,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 10,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      0
                    </Text>
                  </View>
                  <Feather color="white" size={20} name="shopping-cart" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <Modal
          visible={this.state.showModal}
          animationType="slide"
          transparent={true}
          onRequestClose={() => this.setState({ showModal: false })}
        >
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.8)",
              alignItems: "center",
              justifyContent: "flex-end",
              flex: 1,
              //   borderTopRightRadius: 20,
              //   borderTopLeftRadius: 20,
            }}
          >
            <TouchableOpacity
              style={{
                width: width,
                flex: 1,
              }}
              onPress={() => this.setState({ showModal: false })}
            ></TouchableOpacity>
            <View
              style={{
                backgroundColor: "white",
                width: width - 10,
                // height: 300,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                padding: 15,
              }}
            >
              <Feather
                color="#a0a4a8"
                style={{ position: "absolute", top: 20, right: 20 }}
                size={25}
                name="heart"
              />
              <Image
                source={require("../images/burger.png")}
                style={{
                  width: width - 100,
                  height: width - 150,
                  marginTop: -150,
                  zIndex: 100,
                }}
              />
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                    width: "50%",
                    color: "#525752",
                  }}
                >
                  BBQ Bacon Cheese Burger
                </Text>
                <Text style={{ fontSize: 20, color: "#525752" }}>
                  &cent; 25.99
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                  alignItems: "center",
                }}
              >
                <Text style={{ ontSize: 20, color: "#525752" }}>Qty</Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#fb4e4e",
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Feather
                      color="white"
                      style={{ marginRight: 0 }}
                      size={15}
                      name="minus"
                    />
                  </View>
                  <TextInput
                    defaultValue="1"
                    style={{
                      width: 40,
                      fontSize: 40,
                      fontSize: 20,
                      fontWeight: "bold",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingHorizontal: 15,
                    }}
                  />

                  <View
                    style={{
                      backgroundColor: "#fb4e4e",
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Feather
                      color="white"
                      style={{ marginRight: 0 }}
                      size={15}
                      name="plus"
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20, color: "#525752" }}>Type</Text>
                <View>
                  <FlatList
                    horizontal
                    ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                    data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
                    renderItem={({ item }) => (
                      <View
                        style={{
                          backgroundColor: "#fb4e4e",
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontWeight: "bold", color: "white" }}>
                          12"
                        </Text>
                      </View>
                    )}
                    keyExtractor={(item) => item.id}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                  alignItems: "center",
                }}
              >
                <Text style={{ ontSize: 20, color: "#525752" }}>Note</Text>
                <View
                  style={{
                    backgroundColor: "#eee",
                    width: "80%",
                    paddingVertical: 8,
                    borderRadius: 15,
                    // marginVertical: 10,/*  */
                  }}
                >
                  <TextInput
                    style={{
                      height: 25,
                      paddingHorizontal: 15,
                      marginRight: 10,
                      fontSize: 18,
                    }}
                    placeholder="Make a request to the vendor"
                  />
                </View>
              </View>
              <PrimaryButton
                // onPress={() => this.props.navigation.navigate("")}
                text="Add to cart"
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
