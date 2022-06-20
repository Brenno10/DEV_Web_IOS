function TasksDone({ task, onToggle, onDelete }) {
    return (
        <div style={{marginBottom: '7rem'}}>
            <h2>tasksDone</h2>

            <div className="listContainer">
                {task.map((task) => (
                    <div className="list" key={task.id}>
                        <p className="listItem">{task.task}</p>
                        <p className="listItem">{task.date}</p>
                        
                        <div className="listItem listButton">
                            <button className="btnList changeBtn" onClick={() => onToggle(task.id)}><p className="invertedFont">V</p></button>
                            <button className="btnList deleteBtn" onClick={() => onDelete(task.id)}>X</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TasksDone;
