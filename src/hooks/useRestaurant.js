import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setRestaurantDetails(response.data);
      setErrorMessage("");
    } catch (error) {
      setRestaurantDetails({});
      setErrorMessage("Something went wrong.");
    }
  };

  return [searchApi, restaurantDetails, errorMessage];
};
