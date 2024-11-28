
export interface ITask {
    id:string;
    name:string;
    status:string;
}

export interface IBoard {
    tasks: ITask[];
    id: string;
    name: string
}