function NewTask({ createNewTask }) {
    function popUp() {
        document.getElementById('show').className = 'modalContainer show';
        // bloqueia o scroll da página depois de abrir o modal
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = 'no';
    }

    function closePopUp() {
        document.getElementById('show').className = 'modalContainer';
        // permite scroll da página depois de fechar o modal
        document.documentElement.style.overflow = 'auto';
        document.body.scroll = 'yes';
    }

    return (
        <div>
            <div className="addNewTask">
                <button onClick={popUp}>+</button>

                <div id="show" className="modalContainer">
                    <div className="modal">
                        <button className="closeModal" onClick={closePopUp}>
                            X
                        </button>

                        <h3 className="popUpTitle">Crie uma nova tarefa</h3>
                        <div className="newTaskForm">
                            <input
                                id="taskName"
                                type={'text'}
                                placeholder={'Tarefa'}
                            ></input>

                            <input
                                id="taskDate"
                                type={'text'}
                                placeholder={'Data'}
                            ></input>

                            <button onClick={createNewTask}>
                                Criar nova tarefa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewTask;
