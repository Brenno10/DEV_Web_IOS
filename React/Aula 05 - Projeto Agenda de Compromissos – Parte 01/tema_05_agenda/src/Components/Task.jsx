import TaskItem from './TaskItem';

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        // <> </> é um elemento vazio apenas para agrupar o código, <div></div> também funciona
        <>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </>
    );
};

export default Tasks;
