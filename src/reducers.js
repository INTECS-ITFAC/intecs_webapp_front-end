// Reducers: combine all reducers of the app
import { combineReducers } from "redux";

import contributes from "./modules/contributes/ducks";

export default combineReducers({
  Contributes: contributes,
});
