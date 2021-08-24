import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ShopBox from "./ShopBox";

const ShopsList = ({ title, shops, navigation }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={shops}
        keyExtractor={(shop) => shop.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Shop Screen", {
                  id: item.id,
                  name: item.name,
                })
              }
            >
              <ShopBox shop={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ShopsList;
