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
  FlatList,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Rate from "../Components/Rating";

const { width } = Dimensions.get("window");
const { StatusBarManager } = NativeModules;
let StatusBar = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default function CategoryList(props) {
  let data = props.route.params.items;
  let queryResult = [
    {
      id: 1,
      image: require("../images/restaurants/15.jpg"),
      name: "Mc Donald's - Accra",
      tag: "Western cuisine, Fast Food, burger",
      rate: 4,
      avgDeliveryTime: 30,
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          marginTop: 10,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fb4e4e" }}>
            {data.name}
          </Text>
          <View
            style={{
              width: 30,
              height: 4,
              backgroundColor: "#fb4e4e",
              borderRadius: 10,
              marginTop: 5,
            }}
          ></View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          width: width,
          flex: 1,
          padding: 17,
        }}
      >
        <SafeAreaView>
          {queryResult ? (
            <FlatList
              vertical={true}
              showsHorizontalScrollIndicator={false}
              data={queryResult}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={(item) => props.navigation.navigate("Shop", item)}
                  style={{
                    width: width - 100,
                    backgroundColor: "white",
                    borderRadius: 10,
                    //   height: 200,
                    marginRight: 20,
                    padding: 8,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 20,
                      marginRight: 10,
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
                        marginTop: 15,
                        width: width - 155,
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
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text style={{ fontSize: 18, color: "gray", fontWeight: "bold" }}>
                No results found
              </Text>
            </View>
          )}
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar + 10,
    backgroundColor: "#eee",
  },
});
