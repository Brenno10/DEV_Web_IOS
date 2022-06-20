function TasksOpen({ task, onToggle, onDelete }) {
    return (
        <div>
            <h2>tasksOpen</h2>

            <div className="listContainer">
                {task.map((task) => (
                    <div className="list" key={task.id}>
                        <p className="listItem">{task.task}</p>
                        <p className="listItem">{task.date}</p>
                        
                        <div className="listItem listButton">
                            <button className="btnList changeBtn" onClick={() => onToggle(task.id)}>V</button>
                            <button className="btnList deleteBtn" id="deleteItemBtn" onClick={() => onDelete(task.id)}>X</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TasksOpen;
