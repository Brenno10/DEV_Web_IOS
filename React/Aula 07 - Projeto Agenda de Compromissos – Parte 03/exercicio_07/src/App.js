import './App.css';
import NewTask from './Components/NewTask';
import TasksOpen from './Components/TasksOpen';
import TasksDone from './Components/TasksDone';
import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: 'Brenno',
            date: '15 06 2002',
            reminder: true,
        },
        {
            id: 2,
            task: 'Nora',
            date: '05 09 2004',
            reminder: false,
        },
        {
            id: 3,
            task: 'Selle',
            date: '10 04 2000',
            reminder: true,
        },
    ]);

    // filtro de tarefas a fazer e feitas
    let ongoingTasks = tasks.filter((task) => task.reminder);
    let finishedTasks = tasks.filter((task) => !task.reminder);

    // proximo id
    let nextID = tasks.length;

    function createNewTask() {
        let newTaskName = document.getElementById('taskName').value;
        let newTaskDate = document.getElementById('taskDate').value;

        if (newTaskName !== '' || newTaskDate !== '') {
            let NewTask = {
                id: ++nextID,
                task: newTaskName,
                date: newTaskDate,
                reminder: true,
            };

            setTasks([...tasks, NewTask]);
            document.getElementById('show').className = 'modalContainer';
            // permite scroll da página depois de criar um elemento
            document.documentElement.style.overflow = 'auto';
            document.body.scroll = 'yes';
        }

        newTaskName = '';
        newTaskDate = '';
    }

    function changeReminder(id) {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    }

    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (
        <div className="container">
            <h1>Organizador de tarefas</h1>
            <NewTask createNewTask={createNewTask} />

            {ongoingTasks.length > 0 ? (
                <TasksOpen
                    task={ongoingTasks}
                    onToggle={changeReminder}
                    onDelete={deleteTask}
                />
            ) : (
                <div>
                    <h2>tasksOpen</h2>

                    <p>Não há tarefas pendentes!</p>
                </div>
            )}

            {finishedTasks.length > 0 ? (
                <TasksDone
                    task={finishedTasks}
                    onToggle={changeReminder}
                    onDelete={deleteTask}
                />
            ) : (
                <div>
                    <h2>tasksDone</h2>

                    <p>Você ainda não completou nenhuma tarefa!</p>
                </div>
            )}
        </div>
    );
}

export default App;
