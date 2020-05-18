/* INDEX FILE
It exports as default the reducer function of the duck.
It exports as named export the selectors and the operations.
Optionally it exports the actions and types if they are needed in other ducks.
*/

import reducers from "./reducers";

import eventsService from "./service";
import eventsTypes from "./types";
import eventsActions from "./actions";

export { eventsService, eventsActions, eventsTypes };

export default reducers;
