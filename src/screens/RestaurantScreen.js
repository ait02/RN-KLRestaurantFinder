import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import useRestaurant from "../hooks/useRestaurant";

const RestaurantScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [searchApi, restaurantDetails, errorMessage] = useRestaurant();

  useEffect(() => {
    searchApi(id);
  }, []);

  if (!restaurantDetails) {
    return null;
  }

  return (
    <View>
      <Text>{restaurantDetails.name}</Text>
      <View style={styles.imageContainer}>
        <FlatList
          data={restaurantDetails.photos}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    // width: "80%",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
});

export default RestaurantScreen;
