import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import ShopImages from "../components/ShopImages";
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
        <ShopImages photos={shopDetails.photos} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {},
});

export default ShopScreen;
