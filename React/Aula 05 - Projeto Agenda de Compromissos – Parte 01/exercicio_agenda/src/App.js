import './App.css';
import Header from './Components/Header';
import Tasks from './Components/Task';
import NewTasks from './Components/NewTasks';
import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Consulta médica',
            day: '5 de Fev as 14:30',
            reminder: true,
        },
        {
            id: 2,
            text: 'Reunião na Escola',
            day: '6 de Fev as 13:30',
            reminder: true,
        },
        {
            id: 3,
            text: 'Compras no Supermercado',
            day: '7 de Fev as 8:30',
            reminder: false,
        },
    ]);

    let proxID = tasks.length;

    const createNewTask = () => {
        let newTaskName = document.getElementById('taskName');
        let newTaskDate = document.getElementById('taskDate');

        if (newTaskName.value !== '' || newTaskDate.value !== '') {
            let newItem = {
                id: ++proxID,
                text: newTaskName.value,
                day: newTaskDate.value,
                reminder: true,
            };

            setTasks([...tasks, newItem]);
        }

        newTaskName.value = '';
        newTaskDate.value = '';
    };

    const mudarReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    const deletaTarefa = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="container">
            <Header title="tarefas" onClick={createNewTask} />
            <NewTasks />
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deletaTarefa}
                    onToggle={mudarReminder}
                />
            ) : (
                'Crie uma tarefa!'
            )}
        </div>
    );
}

export default App;
