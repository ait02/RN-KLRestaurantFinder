import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import useShop from "../hooks/useShop";

const ShopScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const [searchApi, shopDetails, errorMessage] = useShop();

  useEffect(() => {
    searchApi(id);
  }, []);

  if (!shopDetails) {
    return null;
  }

  return (
    <View>
      <View style={styles.imageContainer}>
        <FlatList
          data={shopDetails.photos}
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

export default ShopScreen;
