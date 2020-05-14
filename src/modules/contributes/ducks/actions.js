// Actions
import { createAction } from "redux-actions";
import types from "./types";

export default {
  getContributes: createAction(types.GET_CONTRIBUTES),
  getContributesSuccess: createAction(types.GET_CONTRIBUTES_SUCCESS),
  getContributesFail: createAction(types.GET_CONTRIBUTES_FAILED),

  getContributesBackend: createAction(types.GET_CONTRIBUTES_BACKEND),
  getContributesBackendSuccess: createAction(
    types.GET_CONTRIBUTES_BACKEND_SUCCESS
  ),
  getContributesBackendFail: createAction(types.GET_CONTRIBUTES_BACKEND_FAILED),
};
