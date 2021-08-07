import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import RestaurantBox from "./RestaurantBox";

const RestaurantsList = ({ title, restaurants, navigation }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantShow", { id: item.id })
              }
            >
              <RestaurantBox restaurant={item} />
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

export default withNavigation(RestaurantsList);
