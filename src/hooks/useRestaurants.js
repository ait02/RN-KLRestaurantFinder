import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    searchApi();
  }, []);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "kuala lumpur",
        },
      });
      setRestaurants(response.data.businesses);
      setErrorMessage("");
    } catch (error) {
      setRestaurants([]);
      setErrorMessage("Something went wrong.");
    }
  };

  return [searchApi, restaurants, errorMessage];
};
