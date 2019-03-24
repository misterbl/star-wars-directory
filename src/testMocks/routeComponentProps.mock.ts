import history from "./history.mock";

export default {
  history,
  location: history.location,
  match: {
    params: {},
    isExact: true,
    path: "",
    url: ""
  }
};
