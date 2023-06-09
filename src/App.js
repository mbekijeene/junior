import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountData from "./components/AccountSection/AccountData";
import Footer from "./components/Footer";
import Menu from "./components/Menu/Menu";
import TasksSection from "./components/TasksSection/TasksSection";
import ModalCreateTask from "./components/Utilities/ModalTask";
import { Task } from "./interfaces";
import { RootState } from "./store/store"; // Assuming RootState is defined in a separate file
import { closeModalCreateTask, addNewTask } from "./store/actions";

const App = () => {
  // const modal = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const handleCloseModalCreateTask = () => {
    dispatch(closeModalCreateTask());
  };

  // const handleCreateNewTask = function (task: Task) {
  //   dispatch(addNewTask(task));
  // };

  return (
    <div className="bg-slate-200 min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-base sm:text-sm text-xs">
      {modal.modalCreateTaskOpen && (
        <ModalCreateTask
          onClose={handleCloseModalCreateTask}
          nameForm="Add a task"
          onConfirm={handleCreateNewTask}
        />
      )}
      <Menu />
      <TasksSection />
      <Footer />
      <AccountData />
    </div>
  );
};

export default App;
