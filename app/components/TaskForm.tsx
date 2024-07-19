"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";

import { useTaskContext } from "@/context/TaskContext";
import { Task } from "@/interfaces/task";

interface TaskFromPropsType {
  onClose: () => void;
}

const TaskForm = ({ onClose }: TaskFromPropsType) => {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Task["status"]>("To Do");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      addTask({ id: Date.now(), title, description, status });
      setTitle("");
      setDescription("");
      setStatus("To Do");
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 mb-4">
      <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Task["status"])}
          className="input focus:outline-none focus:shadow-outline"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <Button type="submit" color="primary">
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;
