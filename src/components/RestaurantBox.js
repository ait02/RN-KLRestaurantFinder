import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RestaurantBox = ({ restaurant }) => {
  return (
    <View style={styles.restaurantContainer}>
      <View style={styles.restaurantBackground}>
        {restaurant.image_url ? (
          <Image
            style={styles.imageStyle}
            source={{ uri: restaurant.image_url }}
            resizeMode={"stretch"}
          />
        ) : null}
        <View style={styles.detailsStyle}>
          <Text style={styles.nameStyle}>{restaurant.name}</Text>
          <Text style={styles.restaurantDetailsStyle}>
            {restaurant.rating} Stars, {restaurant.review_count} Reviews
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    marginLeft: 8,
    marginBottom: 20,
    width: 290,
    height: 180,
    marginRight: 5,
  },
  restaurantBackground: {
    // backgroundColor: "#F0EEEE",
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 5,
    width: "auto",
    height: "auto",
    alignItems: "center",
    paddingVertical: 5,
  },
  imageStyle: {
    borderRadius: 10,
    height: 140,
    width: 280,
    resizeMode: "cover",
  },
  detailsStyle: {
    alignSelf: "flex-start",
    marginLeft: 6,
  },
  nameStyle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  restaurantDetailsStyle: {},
});

export default RestaurantBox;
