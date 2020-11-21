import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  TouchableWithoutFeedback,
  AsyncStorage,
} from "react-native";
import Rate from "./Rating";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

function Popular(props) {
  return (
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
        <TouchableOpacity onPress={props.viewMore}>
          <Text style={{ color: "#FB4E4E", marginRight: 15 }}>View more</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <SafeAreaView>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={props.data}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  AsyncStorage.setItem("shopKey", JSON.stringify({ name: item }));
                  props.onPress;
                }}
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
  );
}

export default Popular;

const styles = StyleSheet.create({
  popular: {
    marginLeft: 17,
    marginTop: 13,
  },
});
