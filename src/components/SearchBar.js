import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

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
        />
        <TouchableOpacity
          onPress={() => onSearchTermChange("")}
          style={styles.entypoStyle}
        >
          <Ionicons name="close-outline" style={{ fontSize: 28 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: -10,
    backgroundColor: "#1A434E",
    height: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
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
    marginRight: 8,
  },
  entypoStyle: {
    fontSize: 28,
    alignSelf: "center",
    height: "100%",
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    flex: 1,
  },
});

export default SearchBar;
