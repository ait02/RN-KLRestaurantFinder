import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantShow: RestaurantScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "KL Restaurant Finder",
    },
  }
);

export default createAppContainer(navigator);
