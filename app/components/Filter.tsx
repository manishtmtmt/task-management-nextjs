"use client";

import React from "react";

import { useTaskContext } from "@/context/TaskContext";
import { Task } from "@/interfaces/task";

const Filter = () => {
  const { filterStatus, setFilterStatus } = useTaskContext();

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Filter by Status
      </label>
      <select
        value={filterStatus}
        onChange={e => setFilterStatus(e.target.value as Task['status'])}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default Filter;
