import type { MESSAGE_EVENT_NAMES } from "./event-names";
import type { MessageSubscribePayload, NewMessagePayload } from "./payloads";

export interface MessageClientToServerEvents {
  [MESSAGE_EVENT_NAMES.SUBSCRIBE]: (payload: MessageSubscribePayload) => void;
}

export interface MessageServerToClientEvents {
  [MESSAGE_EVENT_NAMES.NEW_MESSAGE]: (payload: NewMessagePayload) => void;
}
