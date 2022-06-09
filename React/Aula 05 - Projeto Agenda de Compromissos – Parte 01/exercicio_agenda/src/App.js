import './App.css';
import Header from './Components/Header';
import Tasks from './Components/Task';
import NewTasks from './Components/NewTasks';
import { useState } from 'react'; // Componente do react para trabalhar com hooks

function App() {
    // setTasks é quem é chamado para modificar o array de objetos 'tasks'.
    // hook useState permite usar variáveis de funções sem usar classes.
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

    const createNewTask = () => {
        let newTaskName = document.getElementById('taskName');
        let newTaskDate = document.getElementById('taskDate');

        tasks.push({
            id: tasks[tasks.length - 1].id + 1,
            text: newTaskName.value,
            day: newTaskDate.value,
            reminder: true,
        });

        newTaskName.value = '';
        newTaskDate.value = '';

        console.log(tasks);
    };

    const mudarReminder = (id) => {
        // '...array' pega todos os valores de um objeto e permite modificar apenas alguns dos itens,
        // sem precisar reescrever todo o objeto. ' ... ' se chama rest.
        // Quando ativado, recebe o id do objeto que ele está e percorre o array de objeteos para verificar qual objeto ele é.
        // Se o id o objeto recebido for igual ao id do objeto clicado, inverte o valor boleano de reminder
        // e o renderiza na página, sem modificar o resto. Caso contrario mantem o valor como está.
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    const deletaTarefa = (id) => {
        // .filter() cria um novo array com todos os elementos que passão um teste. Recebe uma função como parâmetro
        // Quando ativado, recebe o id do objeto que ele está e cria um novo array,
        // filtrando todos os objetos com id diferente do recebido e os renderiza na página.
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="container">
            <Header title="tarefas" onClick={createNewTask} />
            <NewTasks />
            {tasks.length > 0 ? (
                // Isso é igual a um if else statement
                <Tasks
                    tasks={tasks}
                    onDelete={deletaTarefa}
                    onToggle={mudarReminder}
                />
            ) : (
                'Você não tem tarefas, pode tirar férias!'
            )}
        </div>
    );
}

export default App;
