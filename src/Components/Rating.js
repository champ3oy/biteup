import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: this.props.rate
    };
  }

  static navigationOptions = {
    header: null
  };

  render() {
    let iconSize = 15
    let fontSize = 0

    this.props.iconSize ? (iconSize = this.props.iconSize) : (iconSize = 20);
    this.props.fontSize ? (fontSize = this.props.fontSize) : (fontSize = 17);
    if (Math.round(this.state.rate) === 0) {
      return (
        <View style={styles.container}>
          <Ionicons name="md-stat-outline" size={iconSize} color="gold" />
          <Ionicons name="md-stat-outline" size={iconSize} color="gold" />
          <Ionicons name="md-stat-outline" size={iconSize} color="gold" />
          <Ionicons name="md-stat-outline" size={iconSize} color="gold" />
          <Ionicons name="md-stat-outline" size={iconSize} color="gold" />
          {/* <Text
            style={[
              { color: this.props.color, fontSize: fontSize },
              styles.rate
            ]}
          >
            {this.state.rate}
          </Text> */}
        </View>
      );
    }
    if (Math.round(this.state.rate) === 1) {
      return (
        <View style={styles.container}>
          <Ionicons name="md-star" size={iconSize} color="gold" />
          <Ionicons name="md-star-outline" size={iconSize} color="gold" />
          <Ionicons name="md-star-outline" size={iconSize} color="gold" />
          <Ionicons name="md-star-outline" size={iconSize} color="gold" />
          <Ionicons name="md-star-outline" size={iconSize} color="gold" />
          {/* <Text
            style={[
              { color: this.props.color, fontSize: fontSize },
              styles.rate
            ]}
          >
            {this.state.rate}
          </Text> */}
        </View>
      );
    }
    if (Math.round(this.state.rate) === 2) {
      return (
        <View style={styles.container}>
          <Ionicons name="md-star" size={iconSize} color="gold" />
          <Ionicons name="md-star" size={iconSize} color="gold" />
          <Ionicons name="md-star-outline" size={iconSize} color="gold" />
          <Ionicons name="md-star-outline" size={iconSize} color="gold" />
          <Ionicons name="md-star-outline" size={iconSize} color="gold" />
          {/* <Text
            style={[
              { color: this.props.color, fontSize: fontSize },
              styles.rate
            ]}
          >
            {this.state.rate}
          </Text> */}
        </View>
      );
    }
    if (Math.round(this.state.rate) === 3) {
      return (
        <View style={styles.container}>
          <Ionicons name="md-star" size={iconSize} color="gold" />
          <Ionicons name="md-star" size={iconSize} color="gold" />
          <Ionicons name="md-star" size={iconSize} color="gold" />
          <Ionicons name="md-star-outline" size={iconSize} color="gold" />
          <Ionicons name="md-star-outline" size={iconSize} color="gold" />
          {/* <Text
            style={[
              { color: this.props.color, fontSize: fontSize },
              styles.rate
            ]}
          >
            {this.state.rate}
          </Text> */}
        </View>
      );
    }
    if (Math.round(this.state.rate) === 4) {
      return (
        <View style={styles.container}>
          <Ionicons name="md-star" size={iconSize} color="gold" />
          <Ionicons name="md-star" size={iconSize} color="gold" />
          <Ionicons name="md-star" size={iconSize} color="gold" />
          <Ionicons name="md-star" size={iconSize} color="gold" />
          <Ionicons name="md-star-outline" size={iconSize} color="gold" />
          {/* <Text
            style={[
              { color: this.props.color, fontSize: fontSize },
              styles.rate
            ]}
          >
            {this.state.rate}
          </Text> */}
        </View>
      );
    }
    if (Math.round(this.state.rate) === 5) {
      return (
        <View style={styles.container}>
          <Ionicons name="md-star" size={iconSize} color="gold" />
          <Ionicons name="md-star" size={iconSize} color="gold" />
          <Ionicons name="md-star" size={iconSize} color="gold" />
          <Ionicons name="md-star" size={iconSize} color="gold" />
          <Ionicons name="md-star" size={iconSize} color="gold" />
          {/* <Text
            style={[
              { color: this.props.color, fontSize: fontSize },
              styles.rate
            ]}
          >
            {this.state.rate}
          </Text> */}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  rate: {
    fontWeight: "bold",
    marginLeft: 4
  }
});

export default Rate;
