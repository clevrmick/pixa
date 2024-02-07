import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID XPGglH86-nJbs7M13snegdC3Rb0wFcnbG9Yv8IRlW-E",
    },

    params: {
      query: term,
    },
  });
  //   console.log(response);
  return response.data.results;
};

export default searchImages;
