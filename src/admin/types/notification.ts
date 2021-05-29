export interface Notification {
  id: string;
  code: string;
  createdAt: number;
  params?: {
    quantity?: string;
    user?: string;
  };
  unread: boolean;
}
