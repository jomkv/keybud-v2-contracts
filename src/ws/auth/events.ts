import type { AUTH_EVENT_NAMES } from "./event-names";
import type {
  AuthSubscribePayload,
  AuthSubscribeSuccessPayload,
} from "./payloads";

export interface AuthClientToServerEvents {
  [AUTH_EVENT_NAMES.SUBSCRIBE]: (payload: AuthSubscribePayload) => void;
}

export interface AuthServerToClientEvents {
  [AUTH_EVENT_NAMES.SUBSCRIBE_SUCCESS]: (
    payload: AuthSubscribeSuccessPayload,
  ) => void;
  [AUTH_EVENT_NAMES.COMPLETE]: () => void;
}
