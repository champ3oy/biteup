import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  NativeModules,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import Rate from "../Components/Rating";
import { Feather, Ionicons } from "@expo/vector-icons";
import Campaignes from "../Components/Campaignes";

const { width } = Dimensions.get("window");
const { StatusBarManager } = NativeModules;
let StatusBar = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default function Home(props) {
  let popularData = [
    {
      id: 1,
      image: require("../images/restaurants/15.jpg"),
      name: "Mc Donald's",
      tag: "Western cuisine, Fast Food, burger",
      rate: 4,
      avgDeliveryTime: 30,
    },
    {
      id: 2,
      image: require("../images/restaurants/12.jpg"),
      name: "KFC - Accra",
      tag: "French fries & Chicken, Fast Food, burger",
      rate: 4,
      avgDeliveryTime: 30,
    },
  ];
  let recommendedData = [
    {
      id: 3,
      image: require("../images/restaurants/16.jpg"),
      name: "Papaye",
      tag: "Local cuisine, Fast Food, kelewele",
      rate: 4,
      avgDeliveryTime: 30,
    },
    {
      id: 1,
      image: require("../images/restaurants/15.jpg"),
      name: "Mc Donald's - Accra",
      tag: "Western cuisine, Fast Food, burger",
      rate: 4,
      avgDeliveryTime: 30,
    },
    {
      id: 2,
      image: require("../images/restaurants/12.jpg"),
      name: "KFC - Accra",
      tag: "French fries & Chicken, Fast Food, burger",
      rate: 4,
      avgDeliveryTime: 30,
    },
  ];
  let categoryData = [
    {
      id: 1,
      name: "Milktea",
      icon: "ios-pint",
      stores: 20,
      color: "#FB4E4E",
    },
    {
      id: 2,
      name: "Drink",
      icon: "ios-beer",
      stores: 20,
      color: "#7c4efb",
    },
    {
      id: 3,
      name: "Vege",
      icon: "ios-nutrition",
      stores: 20,
      color: "#00b16d",
    },
    {
      id: 4,
      name: "Pizza",
      icon: "ios-pizza",
      stores: 20,
      color: "tomato",
    },
    {
      id: 5,
      name: "Grill",
      icon: "ios-bonfire",
      stores: 20,
      color: "#ffbf0f",
    },
  ];
  let campaigneData = [
    {
      id: 1,
      image: require("../images/restaurants/16.jpg"),
    },
    {
      id: 2,
      image: require("../images/restaurants/16.jpg"),
    },
    {
      id: 3,
      image: require("../images/restaurants/16.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <View style={styles.topTop}>
            <View style={styles.location}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Hello
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather
                  color="#52575c"
                  style={{ marginRight: 5 }}
                  size={13}
                  name="user"
                />
                <Text style={{ fontWeight: "100", color: "#52575c" }}>
                  Cirlorm
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("MyOrders")}
              style={styles.profile}
            >
              <Feather
                  color="#52575c"
                  style={{ marginRight: 5 }}
                  size={25}
                  name="shopping-bag"
                />
            </TouchableOpacity>
          </View>
          <View style={styles.topDown}>
            <View>
              <Feather
                color="#a0a4a8"
                style={{ marginRight: 10 }}
                size={20}
                name="search"
              />
            </View>
            <TextInput
              style={{ fontSize: 16 }}
              placeholder="Search for dish, restaurant or place"
              onFocus={() => props.navigation.navigate('Search')}
            />
          </View>
        </View>

        <View style={styles.popular}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Popular Near You
            </Text>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("ScrollScreen", {
                  items: { data: popularData, name: "Popular" },
                })
              }
            >
              <Text style={{ color: "#FB4E4E", marginRight: 15 }}>
                View more
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <SafeAreaView>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={popularData}
                renderItem={({ item }) => (
                  <TouchableWithoutFeedback
                    onPress={() => props.navigation.navigate("Shop", item)}
                  >
                    <View
                      style={{
                        width: width - 100,
                        backgroundColor: "white",
                        borderRadius: 10,
                        //   height: 200,
                        marginRight: 20,
                        padding: 8,
                      }}
                    >
                      <Image
                        style={{
                          width: "100%",
                          height: 150,
                          borderRadius: 10,
                        }}
                        source={item.image}
                      />
                      <View style={{ marginTop: 8 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                          {item.name}
                        </Text>
                        <Text style={{ color: "#a0a4a8", fontSize: 12 }}>
                          {item.tag}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
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
                            <Text style={{ color: "#FB4E4E", fontSize: 12 }}>
                              30'
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                )}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
          </View>
        </View>

        <View style={styles.popular}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Explore Categories
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Categories")}
            >
              <Text style={{ color: "#FB4E4E", marginRight: 15 }}>
                Show all
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <SafeAreaView>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={categoryData}
                renderItem={({ item }) => (
                  <TouchableWithoutFeedback
                    onPress={() =>
                      props.navigation.navigate("CategoryList", {
                        items: { data: item, name: item.name },
                      })
                    }
                    style={{
                      width: 90,
                      backgroundColor: item.color,
                      borderRadius: 15,
                      height: 100,
                      marginRight: 10,
                      padding: 8,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 90,
                        backgroundColor: item.color,
                        borderRadius: 15,
                        height: 100,
                        marginRight: 10,
                        padding: 8,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons
                        color="white"
                        style={{ marginBottom: 5 }}
                        size={40}
                        name={item.icon}
                      />
                      <Text style={{ color: "white", fontSize: 12 }}>
                        {item.name}
                      </Text>
                      <Text style={{ color: "white", fontSize: 10 }}>
                        {item.stores} Places
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                )}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
          </View>
        </View>

        <View style={styles.popular}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Recommended
            </Text>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("ScrollScreen", {
                  items: { data: recommendedData, name: "Featured" },
                })
              }
            >
              <Text style={{ color: "#FB4E4E", marginRight: 15 }}>
                Show all
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <SafeAreaView>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={recommendedData}
                renderItem={({ item }) => (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      props.navigation.navigate("Shop", item);
                    }}
                  >
                    <View
                      style={{
                        width: width / 2 - 30,
                        backgroundColor: "white",
                        borderRadius: 10,
                        marginRight: 10,
                        padding: 8,
                        marginBottom: 30,
                      }}
                    >
                      <Image
                        style={{
                          width: "100%",
                          height: 100,
                          borderRadius: 10,
                        }}
                        source={item.image}
                      />
                      <View style={{ marginTop: 8 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                          {item.name}
                        </Text>
                        <Text style={{ color: "#a0a4a8", fontSize: 12 }}>
                          {item.tag}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Rate rate={item.rate} />
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
                              size={10}
                              name="clock"
                            />
                            <Text style={{ color: "#FB4E4E", fontSize: 10 }}>
                              30'
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                )}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
          </View>
        </View>

        <Campaignes
          data={campaigneData}
          onPress={() => props.navigation.navigate("Shop")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#eeee",
    // paddingHorizontal: 15,
  },
  top: {
    paddingHorizontal: 15,
    paddingTop: StatusBar + 10,
  },
  topTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profile: {
    width: 37,
    height: 37,
    borderRadius: 50,
    // backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center'
  },
  topDown: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 17,
    flexDirection: "row",
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  popular: {
    marginLeft: 17,
    marginTop: 13,
  },
});
