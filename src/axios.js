import axios from "axios";
const instance = axios.create({
  baseURL:
    "https://us-central1-subscriptionservice-f776d.cloudfunctions.net/api"
});
export default instance;