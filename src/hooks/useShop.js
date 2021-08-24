import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [shopDetails, setShopDetails] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setShopDetails(response.data);
      setErrorMessage("");
    } catch (error) {
      setShopDetails({});
      setErrorMessage("Something went wrong.");
    }
  };

  return [searchApi, shopDetails, errorMessage];
};
