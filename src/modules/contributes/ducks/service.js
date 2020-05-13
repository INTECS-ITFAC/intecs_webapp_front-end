import { createLogic } from "redux-logic";

import actions from "./actions";
import types from "./types";
import endPoints from "../../../utils/EndPoints";
import * as API from "../../../utils/HTTPClient";

const getContributes = createLogic({
  type: types.GET_CONTRIBUTES,
  latest: true,
  debounce: 1000,

  process({ MockHTTPClient }, dispatch, done) {
    let HTTPClient;
    if (MockHTTPClient) {
      HTTPClient = MockHTTPClient;
    } else {
      HTTPClient = API;
    }
    console.log("Running getContributes Service");
    HTTPClient.Get(endPoints.GETCONTRIBUTES)
      .then((resp) => resp.data)
      .then((data) => {
        dispatch(actions.getContributesSuccess(data));
      })
      .catch((err) => {
        console.log("process -> err", err);
        var errorMessage = "Failed to get regions";
        if (err && err.code === "ECONNABORTED") {
          errorMessage = "Please check your internet connection.";
        }
        dispatch(
          actions.getContributesFail({
            title: "Error!",
            message: errorMessage,
          })
        );
      })
      .then(() => done());
  },
});

const getContributesBackend = createLogic({
  type: types.GET_CONTRIBUTES_BACKEND,
  latest: true,
  debounce: 1000,

  process({ MockHTTPClient }, dispatch, done) {
    let HTTPClient;
    if (MockHTTPClient) {
      HTTPClient = MockHTTPClient;
    } else {
      HTTPClient = API;
    }
    console.log("Running getContributes Service");
    HTTPClient.Get(endPoints.GETCONTRIBUTES_BACKEND)
      .then((resp) => resp.data)
      .then((data) => {
        dispatch(actions.getContributesBackendSuccess(data));
      })
      .catch((err) => {
        console.log("process -> err", err);
        var errorMessage = "Failed to get regions";
        if (err && err.code === "ECONNABORTED") {
          errorMessage = "Please check your internet connection.";
        }
        dispatch(
          actions.getContributesBackendFail({
            title: "Error!",
            message: errorMessage,
          })
        );
      })
      .then(() => done());
  },
});
export default [getContributes, getContributesBackend];
