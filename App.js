import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ShopScreen from "./src/screens/ShopScreen";
import SearchScreen from "./src/screens/SearchScreen";
import SearchScreenHeader from "./src/components/SearchScreenHeader";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            header: () => <SearchScreenHeader />,
          }}
        />
        <Stack.Screen
          name="Shop Screen"
          component={ShopScreen}
          options={({ route }) => ({
            title: route.params.name,
            headerStyle: { backgroundColor: "#1A434E" },
            headerTitleStyle: {
              color: "#ffffff",
              fontSize: 20,
              fontWeight: "bold",
            },
            headerTintColor: "#fff",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const App = createStackNavigator(
//   {
//     Search: SearchScreen,
//     RestaurantShow: RestaurantScreen,
//   },
//   {
//     initialRouteName: "Search",
//     defaultNavigationOptions: {
//       title: "KL Restaurant Finder",
//     },
//   }
// );

export default App;
