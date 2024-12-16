import { ITask } from "../Types/types";
import { useState } from "react";
import { Droppable,Draggable } from "@hello-pangea/dnd"; 


interface ColumnProps {
    title: string;
    tasks: ITask[];
    droppableId: string;
}

const Column: React.FC<ColumnProps> =  ({
    title,
    tasks,
    droppableId,
}) => {
    return (
    <div className="flex">
        <div className="flex gap-1 text-white">
            <h2 className=" text-sm">
                {title}
            </h2>
            
        </div>
    <Droppable droppableId={droppableId}>
        {(provided)=>(
            <div
        )}
    </Droppable>
    
    </div>
    )
}

export default Column