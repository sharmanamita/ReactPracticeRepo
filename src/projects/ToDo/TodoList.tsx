import { FaCircleCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import "./toDo.css";

type TodoListProps = {
    tasks: string[];
    onDone: (index:number) => void;
    onDelete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({tasks, onDone, onDelete}) => {
  const handleDoneAction = (index: number) => {
    onDone(index);
  }

  const handleDeleteAction = (index: number) => {
    onDelete(index);
  }


  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <li key={index} className="todo-item">
          <span className="todo-name">{task}</span>
          <div className="todo-actions">
            <span
              className="check-icon"
              onClick={() => handleDoneAction(index)}
            >
              <FaCircleCheck />
            </span>
            <span
              className="delete-icon"
              onClick={() => handleDeleteAction(index)}
            >
              <MdDelete />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
