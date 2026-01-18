export const AUTH_EVENT_NAMES = {
  SUBSCRIBE: "auth:subscribe",
  SUBSCRIBE_SUCCESS: "auth:subscribe_success",
  COMPLETE: "auth:complete", // client completes login
} as const;

export type AuthEventName =
  (typeof AUTH_EVENT_NAMES)[keyof typeof AUTH_EVENT_NAMES];
