import { ChevronsLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-3">
      <div className="w-[500px] mx-auto space-y-3">
        <div className="flex justify-center relative mb-3">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-white rounded-md p-2 flex gap-2"
          >
            <ChevronsLeft />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-200 p-3 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
