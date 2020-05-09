// Reducers: combine all reducers of the app
import { combineReducers } from "redux";

import contributes from "./modules/contributes/ducks";
import events from "./modules/event/ducks";

export default combineReducers({
  Contributes: contributes,
  Events: events,
});
