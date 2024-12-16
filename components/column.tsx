import { ITask } from "../Types/types";
import { useState } from "react";
import { Droppable,Draggable } from "@hello-pangea/dnd"; 
import {LuDot} from "react-icons/lu"


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
    <div className="flex-1">
        <div className="flex gap-1 text-white">
            <h2 className="  text-2xl font-mono">
                {title}
                <LuDot/>
            </h2>
            
        </div>
        
        <Droppable droppableId={droppableId}>
        {(provided)=>(
            <div {...provided.droppableProps}
            ref={provided.innerRef}
            className="bg-slate-700 rounded-lg p-5">
                
            </div>
        )}
        </Droppable>
        
    </div>
    
    );
};

export default Column