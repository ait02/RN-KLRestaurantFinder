import React, { useEffect, useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import useShops from "../hooks/useShops";
import SearchBar from "./SearchBar";

const SearchScreenHeader = ({ route, navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, shops, errorMessage] = useShops();

  return (
    <View style={styles.background}>
      <SafeAreaView>
        <Text style={styles.titleStyle}>KL Shop Finder</Text>
      </SafeAreaView>
    </View>
  );
};

export default SearchScreenHeader;

const styles = StyleSheet.create({
  background: {
    height: Platform.OS === "ios" ? 110 : 80,
    backgroundColor: "#1A434E",
  },
  titleStyle: {
    top: Platform.OS === "ios" ? 15 : 40,
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
