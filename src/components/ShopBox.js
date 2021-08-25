import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import StarRating from "react-native-star-rating";

const ShopBox = ({ shop, firstShop }) => {
  return (
    <View
      style={[
        styles.shopContainer,
        shop === firstShop ? { marginLeft: 8 } : null,
      ]}
    >
      <View style={styles.shopBackground}>
        {shop.image_url ? (
          <Image
            style={styles.imageStyle}
            source={{ uri: shop.image_url }}
            resizeMode={"cover"}
          />
        ) : null}
        <View style={styles.detailsStyle}>
          <Text style={styles.nameStyle}>{shop.name}</Text>
          <View style={styles.shopDetailsStyle}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={shop.rating}
              fullStarColor={"#F7DE00"}
              starSize={16}
              starStyle={{ width: 20 }}
              containerStyle={{ maxHeight: 20, width: 30 }}
            />
            <Text style={{ justifyContent: "flex-end" }}>
              {shop.review_count} Reviews
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shopContainer: {
    marginLeft: 4,
    marginBottom: 20,
    width: 290,
    height: 180,
    marginRight: 5,
  },
  shopBackground: {
    // backgroundColor: "#F0EEEE",
    backgroundColor: "#F5F7FB",
    borderRadius: 20,
    width: "auto",
    height: "auto",
    alignItems: "center",
    paddingVertical: 5,
  },
  imageStyle: {
    borderRadius: 20,
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
  shopDetailsStyle: {
    width: 270,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ShopBox;
