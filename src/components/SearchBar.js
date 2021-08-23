import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.featherStyle} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
          placeholder="Search"
          style={styles.inputStyle}
          value={searchTerm}
          onChangeText={onSearchTermChange}
          onEndEditing={onSearchTermSubmit}
        ></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { top: 20 },
  backgroundStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 12,
    margin: 15,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  featherStyle: {
    fontSize: 28,
    alignSelf: "center",
  },
  inputStyle: {
    flex: 1,
  },
});

export default SearchBar;
