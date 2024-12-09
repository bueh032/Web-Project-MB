import { ITask } from "../Types/types";
import { useState } from "react";
import { Droppable,Draggable } from "@hello-pangea/dnd"; 
import { title } from "process";

interface ColumnProps{
    title: string;
    tasks: ITask[];
    droppableId: string;
}

const Column = () => {
    return <div className="bg-slate-600 text-white">Column</div>
}

export default Column