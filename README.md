# KeyBud V2 Contracts

Shared TypeScript contracts and type definitions for KeyBud V2.

## Overview

This package contains shared contracts for WebSocket events, payloads, and other common types used across the KeyBud V2 ecosystem. It ensures type safety and consistency between the
two repositories.

## Installation

```sh
pnpm add @jomkv/keybud-v2-contracts
```

## Usage

```typescript
import {
  AUTH_EVENT_NAMES,
  MESSAGE_EVENT_NAMES,
  type AuthClientToServerEvents,
  type MessageServerToClientEvents,
  type NewMessagePayload,
} from "@jomkv/keybud-v2-contracts";
```

## Structure

### WebSocket Contracts

#### Authentication (`ws/auth`)

Handles authentication-related WebSocket events:

- **Event Names**: `AUTH_EVENT_NAMES`
  - `SUBSCRIBE` - Client subscribes to auth events
  - `SUBSCRIBE_SUCCESS` - Server confirms subscription
  - `COMPLETE` - Client completes login

- **Events**:
  - `AuthClientToServerEvents` - Client-to-server event types
  - `AuthServerToClientEvents` - Server-to-client event types

- **Payloads**: `AuthSubscribePayload`, `AuthSubscribeSuccessPayload`

#### Messages (`ws/messages`)

Handles messaging-related WebSocket events:

- **Event Names**: `MESSAGE_EVENT_NAMES`
  - `SUBSCRIBE` - Client subscribes to messages
  - `NEW_MESSAGE` - Server sends new message

- **Events**:
  - `MessageClientToServerEvents` - Client-to-server event types
  - `MessageServerToClientEvents` - Server-to-client event types

- **Payloads**: `MessageSubscribePayload`, `NewMessagePayload`

## Development

### Prerequisites

- Node.js >= 14.17
- pnpm 10.17.0

### Scripts

```sh
# Run tests (not yet implemented)
pnpm test
```

### Project Configuration

- **TypeScript**: Strict mode enabled with modern module resolution
- **Package Manager**: pnpm with workspace support
- **Module System**: ES Modules

## Contributing

1. Fork the repository
2. Create your feature branch
3. Add your contracts to the appropriate directory under `src/`
4. Export new contracts from `src/index.ts`
5. Submit a pull request

## License

MIT © Jom Karlo Verzosa

## Repository

[https://github.com/jomkv/keybud-v2-contracts](https://github.com/jomkv/keybud-v2-contracts)

```

```
