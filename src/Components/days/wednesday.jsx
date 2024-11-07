import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WednesdayPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const storageKey = "wednesday.json"; 

  useEffect(() => {
    const savedTasks = localStorage.getItem(storageKey);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask(""); 
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-3"> Wednesday Tasks</h2>
      <div className="flex items-center mb-2">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a task for Wednesday"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask} className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className={`flex items-center justify-between p-2 border rounded-lg ${task.completed ? "bg-green-100 line-through" : "bg-white"}`}>
            <span onClick={() => toggleTaskCompletion(index)} className={`cursor-pointer flex-grow ${task.completed ? "text-gray-500" : "text-gray-800"}`}>
              {task.text}
            </span>
            <button onClick={() => removeTask(index)} className="text-red-500 hover:text-red-700">
              Remove
            </button>
          </li>
        ))}
      </ul>

      <Link to="/" className="mt-4 inline-block text-blue-500 hover:text-blue-700">Back to Home</Link>
    </div>
  );
};

export default  WednesdayPage;
