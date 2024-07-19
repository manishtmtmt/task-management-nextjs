import { Button, Chip } from "@nextui-org/react";
import React from "react";

import { useTaskContext } from "@/context/TaskContext";
import { Task } from "@/interfaces/task";

const TaskItem = ({ task }: { task: Task }) => {
  const { updateTask, deleteTask } = useTaskContext();

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateTask(task.id, { ...task, status: e.target.value as Task["status"] });
  };

  const getChipColor = (status: Task["status"]) => {
    switch (status) {
      case "To Do":
        return "primary";
      case "In Progress":
        return "warning";
      case "Done":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <div className="mb-4 p-4 bg-gray-100 rounded shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">{task.title}</h3>
        <Chip color={getChipColor(task.status)}>{task.status}</Chip>
      </div>
      <p className="mt-2">{task.description}</p>
      <div className="mt-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Update Status
        </label>
        <select
          value={task.status}
          onChange={handleStatusChange}
          className="input focus:outline-none focus:shadow-outline"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <Button
        onClick={() => deleteTask(task.id)}
        color="danger"
        className="mt-2"
      >
        Delete Task
      </Button>
    </div>
  );
};

export default TaskItem;
