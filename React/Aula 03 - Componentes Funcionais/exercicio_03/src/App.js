import BoasVindas from './Components/BoasVindas';
import Sobre from './Components/Sobre';

function App() {
    return (
        <div style={{ maxWidth: '60%', margin: 'auto auto' }}>
            <BoasVindas name="Brenno" />
            <Sobre />
        </div>
    );
}

export default App;
