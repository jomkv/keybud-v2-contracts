export const MESSAGE_EVENT_NAMES = {
  SUBSCRIBE: "message:subscribe",
  NEW_MESSAGE: "message:new",
} as const;

export type MessageEventName =
  (typeof MESSAGE_EVENT_NAMES)[keyof typeof MESSAGE_EVENT_NAMES];
