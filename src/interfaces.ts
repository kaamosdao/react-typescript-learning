export interface ITask {
  title: string;
  id: number;
  completed: boolean;
}

export interface TaskFormProps {
  onAdd(title: string): void;
}

export interface TaskListProps {
  tasks: ITask[];
  toggleHandler(id: number): void;
  deleteHandler(id: number): void;
}
