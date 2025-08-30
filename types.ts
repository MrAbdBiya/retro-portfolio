
export enum HistoryItemType {
  COMMAND = 'COMMAND',
  RESPONSE = 'RESPONSE',
  ERROR = 'ERROR',
  SYSTEM = 'SYSTEM',
}

export interface HistoryItem {
  type: HistoryItemType;
  text: string | React.ReactNode;
}
