import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: "c437edfcec394e82bef72fe513d7e11d",
  },
});
