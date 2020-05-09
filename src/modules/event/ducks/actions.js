// Actions
import { createAction } from "redux-actions";
import types from "./types";

export default {
  getAllEvents: createAction(types.GET_ALL_EVENTS),
  getAllEventsSuccess: createAction(types.GET_ALL_EVENTS_SUCCESS),
  getAllEventsFail: createAction(types.GET_ALL_EVENTS_FAILED),
};
