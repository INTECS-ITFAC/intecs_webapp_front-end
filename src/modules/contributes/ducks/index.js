/* INDEX FILE
It exports as default the reducer function of the duck.
It exports as named export the selectors and the operations.
Optionally it exports the actions and types if they are needed in other ducks.
*/

import reducers from "./reducers";

import contributesService from "./service";
import contributesTypes from "./types";
import contributesActions from "./actions";

export { contributesService, contributesActions, contributesTypes };

export default reducers;
