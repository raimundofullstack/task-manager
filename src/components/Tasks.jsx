import { Check, ChevronsRight, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="w-[500px] h-[calc(65vh-120px)] overflow-y-auto space-y-3 bg-slate-200 p-3 rounded-md shadow">
      {/* <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow"> */}
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className="text-left bg-slate-400 w-full text-white p-2 rounded-md flex flex-row items-center gap-2"
          >
            {task.isCompleted && <Check size={18} className="text-green-300" />}
            {task.title}
          </button>
          <Button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <ChevronsRight />
          </Button>
          <Button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <Trash2 />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
