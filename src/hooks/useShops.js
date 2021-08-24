import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [shops, setShops] = useState([]);
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
      setShops(response.data.businesses);
      setErrorMessage("");
    } catch (error) {
      setShops([]);
      setErrorMessage("Something went wrong.");
    }
  };

  return [searchApi, shops, errorMessage];
};
