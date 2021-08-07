import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import RestaurantsList from "../components/RestaurantsList";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView style={styles.container}>
        <RestaurantsList
          title="Low Price Restaurants"
          restaurants={filterRestaurantsByPrice("$")}
        />
        <RestaurantsList
          title="Average Price Restaurants"
          restaurants={filterRestaurantsByPrice("$$")}
        />
        <RestaurantsList
          title="Restaurant Golongan T20"
          restaurants={filterRestaurantsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default SearchScreen;
