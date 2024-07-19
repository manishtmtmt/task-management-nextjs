"use client";

import { useTaskContext } from "@/context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
