import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const ShopImages = ({ photos }) => {
  return (
    <View style={styles.imagesContainer}>
      <Text style={styles.imageText}>Shop Images</Text>
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        keyExtractor={(item) => item}
        horizontal={true}
      />
    </View>
  );
};

export default ShopImages;

const styles = StyleSheet.create({
  imagesContainer: {},
  imageText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontStyle: "italic",
    marginVertical: 18,
  },
  image: {
    height: 140,
    width: 200,
    marginLeft: 8,
    borderRadius: 12,
  },
});
