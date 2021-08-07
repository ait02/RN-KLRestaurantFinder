import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer RDK4jgtlnzJA2nRkHsK-F1Wyu9R4I5sw_X9jAtfRDrQa6XZ9Iic6-pCMUpuggGoS4edxkWfdJ8EiGFJ0Uw-zp022C2ak_wT5WnuXze_eZW1yyzCkxrUxSoLxq1UOYXYx",
  },
});
