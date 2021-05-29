export interface Event {
  id: string;
  title: string;
  description?: string;
  start: number;
  end: number;
  color?: EventColor;
}

export const eventColors = ["primary", "warning", "error", "success"] as const;

export type EventColor = typeof eventColors[number];
