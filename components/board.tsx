"use client";
import axios from "axios";
import { DropResult, DragDropContext } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import React from "react";
import { ITask, } from "../Types/types";
import Column from "./column";

const onDragEnd = (result: DropResult) => {
  const { source, destination, draggableId } = result;

  if (!destination) return;

  if (
    source.droppableId === destination.droppableId &&
    source.index === destination.index
  )
    return;

  const draggedTask = tasks.find((task) => task.id === draggableId);

  let updatedStatus: string;

  switch (destination.droppableId) {
    case "todo":
      updatedStatus = "TODO";
      break;
    case "inProgress":
      updatedStatus = "INPROGRESS";
      break;
    case "done":
      updatedStatus = "DONE";
      break;
      default: updatedStatus = draggedTask.status;
  }
};

const Board = () => {
  return (
    <div className="bg-gray-300 py-10 relative h-screen font-mono">
      <h1 className="font-bold text-center mb-10 text-xl ">Kanban</h1>
      <DragDropContext>
        <div className="grid md:grid-cols-3 max-md:items-center w-[90%]  mx-auto md: gap-5 ">
        <Column title=" ToDo" droppableId=""/>
        <Column title="Doing"/>
        <Column title="Done"/>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
