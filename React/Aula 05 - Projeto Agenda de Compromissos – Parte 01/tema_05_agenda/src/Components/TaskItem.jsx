import { FaTimes } from 'react-icons/fa';

const TaskItem = ({ task, onDelete, onToggle }) => {
    return (
        <div
            // if (task.reminder === true) { className="reminder" } else { className="" }
            // ? está perguntando se task.reminder é verdadeiro ou falso.
            className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)} // Quando alguém clica 2 vezes seguidas no item, ativa onToggle.
        >
            <h3>
                {task.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)} // Quando alguém clica no ícone X, ativa onDelete.
                />
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default TaskItem;
