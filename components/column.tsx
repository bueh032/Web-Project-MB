import { ITask } from "../Types/types";
import { useState } from "react";
import { Droppable,Draggable } from "@hello-pangea/dnd"; 

interface ColumnProps{
    title: string;
    tasks: ITask[];
    droppableId: string;
}

const Column: React.FC<ColumnProps> = ({
    
})