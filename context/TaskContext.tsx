"use client";

import { createContext, useContext, useState, ReactNode } from "react";

import { Task } from "@/interfaces/task";

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (id: number, task: Task) => void;
  deleteTask: (id: number) => void;
  filterStatus: Task["status"];
  setFilterStatus: (status: Task["status"]) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterStatus, setFilterStatus] = useState<Task["status"]>("All");

  const addTask = (task: Task) => setTasks((prevTasks) => [...prevTasks, task]);
  const updateTask = (id: number, updatedTask: Task) =>
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? updatedTask : task))
    );
  const deleteTask = (id: number) =>
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  const filterTasks = tasks.filter(
    (task) => filterStatus === "All" || task.status === filterStatus
  );

  return (
    <TaskContext.Provider
      value={{
        tasks: filterTasks,
        addTask,
        updateTask,
        deleteTask,
        filterStatus,
        setFilterStatus,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }

  return context;
};
