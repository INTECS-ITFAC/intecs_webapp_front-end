// Services: all redux-logic services

import { contributesService } from "./modules/contributes/ducks";
import { eventsService } from "./modules/event/ducks";

// Export all redux-logics
export default [...contributesService, ...eventsService];
