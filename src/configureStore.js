import { createStore, combineReducers, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
// import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import * as reducers from "./reducers/reducers";
import rootSaga from "./sagas";

const configureStore = ({ initialState = {} }, history) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [routerMiddleware(history), sagaMiddleware];
  // const router = routerMiddleware(history);
  // const middleware = [thunk, router];

  const reducer = combineReducers({
    ...reducers
  });

  const store = createStore(
    connectRouter(history)(reducer),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  // const store = createStore(
  //   connectRouter(history)(reducer),
  //   initialState,
  //   composeWithDevTools(applyMiddleware(...middleware))
  // );

  sagaMiddleware.run(rootSaga, history);

  return store;
};

export default configureStore;
