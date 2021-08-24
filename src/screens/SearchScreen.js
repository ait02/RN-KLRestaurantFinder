import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import ShopsList from "../components/ShopsList";
import SearchBar from "../components/SearchBar";
import useShops from "../hooks/useShops";

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, shops, errorMessage] = useShops();

  const filterShopsByPrice = (price) => {
    return shops.filter((shop) => {
      return shop.price === price;
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
        <ShopsList
          title="Low Price Shops"
          shops={filterShopsByPrice("$")}
          navigation={navigation}
        />
        <ShopsList
          title="Average Price Shops"
          shops={filterShopsByPrice("$$")}
          navigation={navigation}
        />
        <ShopsList
          title="Kedai Golongan T20"
          shops={filterShopsByPrice("$$$")}
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 30 },
});

export default SearchScreen;
