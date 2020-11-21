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
} from "react-native";

const { width } = Dimensions.get("window");

const Campaignes = (props) => {
  return (
    <View style={styles.popular}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Campaignes</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <SafeAreaView>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={props.data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={props.onPress}
                style={{
                  width: width - 50,
                  backgroundColor: "white",
                  borderRadius: 10,
                  height: 150,
                  marginRight: 20,
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                  }}
                  source={item.image}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Campaignes;

const styles = StyleSheet.create({
  popular: {
    marginLeft: 17,
    marginTop: 13,
  },
});
