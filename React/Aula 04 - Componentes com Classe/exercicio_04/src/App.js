import './App.css';
import Nota from './Components/Nota';
import Nome from './Components/Nome';

function App() {
    return (
        <div className="container">
            <div className="item">
                <Nome aluno="Selle" />
                <Nota notas={[9, 7, 6, 8]} />
            </div>

            <div className="item">
                <Nome aluno="Nora" />
                <Nota notas={[4, 6, 5, 6]} />
            </div>

            <div className="item">
                <Nome />
                <Nota />
            </div>

            <div className="item">
                <Nome aluno="Selle" />
                <Nota notas={[9, 7, 6, 8]} />
            </div>

            <div className="item">
                <Nome aluno="Nora" />
                <Nota notas={[4, 6, 5, 6]} />
            </div>

            <div className="item">
                <Nome />
                <Nota />
            </div>
        </div>
    );
}

export default App;
