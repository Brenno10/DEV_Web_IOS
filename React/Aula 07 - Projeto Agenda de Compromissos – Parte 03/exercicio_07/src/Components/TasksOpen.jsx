function TasksOpen({ task, onToggle, onDelete }) {
    return (
        <div>
            <h2>tasksOpen</h2>

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

export default TasksOpen;
