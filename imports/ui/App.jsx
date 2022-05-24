import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { TasksCollection } from "/imports/api/TasksCollection";
import { Task } from "./Task";
import { TaskForm } from "./TaskForm";

// const tasks = [
//   { _id: 1, text: "Send emails to students" },
//   { _id: 2, text: "Take out the trash" },
//   { _id: 3, text: "Mix dirt and plant tomatoes in garden" },
// ];

export const App = () => {
  const tasks = useTracker(() =>
    TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  return (
    <div>
      <h1>To Do List</h1>

      <TaskForm />

      <ul>
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </div>
  );
};
