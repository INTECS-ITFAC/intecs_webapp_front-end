import { createLogic } from "redux-logic";

import actions from "./actions";
import types from "./types";
import endPoints from "../../../utils/EndPoints";
import * as API from "../../../utils/HTTPClient";

const getAllEvents = createLogic({
  type: types.GET_ALL_EVENTS,
  latest: true,
  debounce: 1000,

  process({ MockHTTPClient }, dispatch, done) {
    let HTTPClient;
    if (MockHTTPClient) {
      HTTPClient = MockHTTPClient;
    } else {
      HTTPClient = API;
    }
    console.log("Running getAllEvents Service");
    HTTPClient.Get(endPoints.Get_all_events)
      // .then((resp) => resp.data)
      .then((resp) => {
        console.log("product id type", resp);
        dispatch(actions.getAllEventsSuccess(resp));
      })
      .catch((err) => {
        console.log("process -> err", err);
        var errorMessage = "Failed to get regions";
        if (err && err.code === "ECONNABORTED") {
          errorMessage = "Please check your internet connection.";
        }
        dispatch(
          actions.getAllEventsFail({
            title: "Error!",
            message: errorMessage,
          })
        );
      })
      .then(() => done());
  },
});

export default [getAllEvents];
