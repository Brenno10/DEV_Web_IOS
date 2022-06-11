function TasksDone({ task, onToggle, onDelete }) {
    return (
        <div>
            <h2>tasksDone</h2>

            <ul>
                {task.map((task) => (
                    <li key={task.id}>
                        <p>{task.task}</p>
                        <p>{task.date}</p>
                        <button onClick={() => onToggle(task.id)}>-</button>
                        <button onClick={() => onDelete(task.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TasksDone;
