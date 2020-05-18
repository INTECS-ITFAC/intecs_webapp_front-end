import types from "./types";
import { handleActions } from "redux-actions";

const initialState = {
  allEvents: {
    loading: true,
    pending: false,
    hasError: false,
    data: [],
    error: {},
  },
};

// Reducers from redux-actions
export default handleActions(
  {
    [types.GET_ALL_EVENTS]: (state, { payload }) => ({
      ...state,
      allEvents: {
        ...state.allEvents,
        loading: true,
        pending: true,
      },
    }),
    [types.GET_ALL_EVENTS_SUCCESS]: (state, { payload }) => ({
      ...state,
      allEvents: {
        ...state.allEvents,
        loading: false,
        pending: false,
        data: payload,
      },
    }),

    [types.GET_ALL_EVENTS_FAILED]: (state, { payload }) => ({
      ...state,
      allEvents: {
        ...state.allEvents,
        loading: false,
        pending: false,
        hasError: true,
        error: { payload },
      },
    }),
  },
  initialState
);
