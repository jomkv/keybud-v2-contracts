import type { MESSAGE_EVENT_NAMES } from "./event-names.ts";
import type { MessageSubscribePayload, NewMessagePayload } from "./payloads.js";

export interface MessageClientToServerEvents {
  [MESSAGE_EVENT_NAMES.SUBSCRIBE]: MessageSubscribePayload;
}

export interface MessageServerToClientEvents {
  [MESSAGE_EVENT_NAMES.NEW_MESSAGE]: NewMessagePayload;
}
