import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  TouchableNativeFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Categories = (props) => {
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
          Explore Categories
        </Text>
        <TouchableOpacity onPress={props.viewMore}>
          <Text style={{ color: "#FB4E4E", marginRight: 15 }}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <SafeAreaView>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={props.data}
            renderItem={({ item }) => (
              <TouchableNativeFeedback
                onPress={props.onPress}
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
              </TouchableNativeFeedback>
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  popular: {
    marginLeft: 17,
    marginTop: 13,
  },
});
