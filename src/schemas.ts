export interface Group {
  name: string;
  items: ListItem[];
}

export interface ListItem {
  name: string;
  completed: boolean;
}
