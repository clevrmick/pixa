import axios from "axios";
const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID XPGglH86-nJbs7M13snegdC3Rb0wFcnbG9Yv8IRlW-E",
    },

    params: {
      query: "cars",
    },
  });
  //   console.log(response);
  return response.data.result;
};

export default searchImages;
