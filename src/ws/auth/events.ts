import type { AUTH_EVENT_NAMES } from "./event-names.ts";
import type {
  AuthSubscribePayload,
  AuthSubscribeSuccessPayload,
} from "./payloads.js";

export interface AuthClientToServerEvents {
  [AUTH_EVENT_NAMES.SUBSCRIBE]: AuthSubscribePayload;
}

export interface ServerToClientEvents {
  [AUTH_EVENT_NAMES.SUBSCRIBE_SUCCESS]: AuthSubscribeSuccessPayload;
  [AUTH_EVENT_NAMES.COMPLETE]: {};
}
