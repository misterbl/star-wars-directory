import { createStore, combineReducers, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import * as reducers from "./reducers/reducers";

const configureStore = ({ initialState = {} }, history) => {
  const router = routerMiddleware(history);
  const middleware = [thunk, router];

  const reducer = combineReducers({
    ...reducers
  });
  const store = createStore(
    connectRouter(history)(reducer),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
};

export default configureStore;
