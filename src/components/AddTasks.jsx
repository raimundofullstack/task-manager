import { useState } from "react";
import Input from "./Input";

function AddTasks({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-3 p-3 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value.trim())}
      ></Input>
      <Input
        type="text"
        placeholder="Digite a descrição da tarefea"
        value={description}
        onChange={(event) => setDescription(event.target.value.trim())}
      ></Input>
      <button
        onClick={() => {
          if (!title || !description) {
            return alert("Por favor, preencha todos os campos.");
          }
          onAddTaskClick(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
