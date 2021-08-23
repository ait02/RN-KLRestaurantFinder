import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import SearchBar from "./SearchBar";

const SearchScreenHeader = ({ route, navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();
  return (
    <View style={styles.background}>
      <SafeAreaView>
        <Text style={styles.titleStyle}>KL Restaurant Finder</Text>
        <SearchBar
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          onSearchTermSubmit={() => searchApi(searchTerm)}
        />
      </SafeAreaView>
    </View>
  );
};

export default SearchScreenHeader;

const styles = StyleSheet.create({
  background: {
    height: 140,
    backgroundColor: "#1A434E",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  titleStyle: {
    top: 15,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
