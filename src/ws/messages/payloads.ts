export interface NewMessagePayload {
  id: number;
  senderId: number;
  conversationId: number;
  content: string;
  createdAt: Date;
  readAt?: Date;
}

export interface MessageSubscribePayload {
  userId: number;
}
