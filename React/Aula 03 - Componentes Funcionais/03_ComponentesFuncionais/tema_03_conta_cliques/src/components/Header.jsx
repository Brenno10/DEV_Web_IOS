import PropTypes from 'prop-types';
const estilo = { color: 'red' };

const Header = (props) => {
    return (
        <div>
            <h1 style={estilo}>Olá, {props.nome}, seja bem-vindo!</h1>
        </div>
    );
};

Header.defaultProps = {
    nome: 'Nome padrão',
};

Header.propTypes = {
    nome: PropTypes.string, // Faz com que o 'nome' espere apenas string e de erro quando receber algo diferente
};

export default Header;
