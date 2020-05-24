import React from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  NativeModules,
  TouchableOpacity,
  Image
} from "react-native";
import PrimaryButton from "../Components/PrimaryButton";

const { width, height } = Dimensions.get("window");
const { StatusBarManager } = NativeModules;
let StatusBar = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselIndex: 0,
      onboardingMesg: [],
    };
  }

  componentDidMount() {
    this.setState({
      onboardingMesg: [
        {
          id: 1,
          title: "Find Your favorite Food",
          subtitle:
            "Find your favorite foold anytime from \nour existing location easily",
          image: require('../images/c-shipping.png'),
        },
        {
          id: 2,
          title: "Hot Delivery to Home",
          subtitle: "Our delivery man deliver the food to \nyour home so fast",
          image: require('../images/c-delivery.png'),
        },
        {
          id: 3,
          title: "Receive the Great Food",
          subtitle: "You'll receive the great food within \na few minutes",
          image: require('../images/c-delivered.png'),
        },
      ],
    });
  }

  get pagination() {
    const { onboardingMesg, carouselIndex } = this.state;
    return (
      <Pagination
        dotsLength={onboardingMesg.length}
        activeDotIndex={carouselIndex}
        containerStyle={{ width: 50 }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 3,
          backgroundColor: "rgb(251, 78, 78)",
        }}
        inactiveDotStyle={{
          backgroundColor: "rgb(251, 78, 78)",
        }}
        inactiveDotOpacity={0.2}
        inactiveDotScale={0.8}
      />
    );
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.carousel}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#fb4e4e" }}>
          upBite
        </Text>
        <View
          style={{
            width: width,
            height: height / 2.5,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 40,
            paddingVertical: 30,
          }}
        >
          <Image style={{width: '100%', height: '100%'}} source={item.image} />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              lineHeight: 55,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: "rgba(0,0,0,0.5)",
            }}
          >
            {item.subtitle}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          enableSnap={true}
          swipeThreshold={70}
          layout={"default"}
          ref={(c) => {
            this._carousel = c;
          }}
          data={this.state.onboardingMesg}
          renderItem={this._renderItem}
          sliderWidth={width}
          itemWidth={width}
          onBeforeSnapToItem={(number) => {
            this.setState({
              carouselIndex: number,
            });
          }}
        />
        <View style={styles.bottomView}>
          {this.state.carouselIndex == 2 ? (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("LoginScreen")}
              style={styles.continueButton}
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: 'bold' }}>Get Started</Text>
            </TouchableOpacity>
          ) : (
            <>
              {this.pagination}
              <TouchableOpacity
                onPress={() => {
                  this._carousel.snapToNext();
                }}
                style={styles.nextButton}
              >
                <Text style={{ color: "white", fontSize: 18, fontWeight: 'bold' }}>Next</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  bottomView: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    height: height / 6,
  },
  nextButton: {
    backgroundColor: "#fb4e4e",
    paddingHorizontal: 65,
    paddingVertical: 17,
    borderRadius: 15,
  },
  continueButton: {
    backgroundColor: "#fb4e4e",
    width: "100%",
    paddingVertical: 17,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  pagination: {
    flexDirection: "row",
  },
  one: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: "rgba(251, 78, 78, 0.1)",
    marginRight: 8,
  },
  carousel: {
    paddingTop: StatusBar,
    height: height - height / 6,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default Onboarding;
