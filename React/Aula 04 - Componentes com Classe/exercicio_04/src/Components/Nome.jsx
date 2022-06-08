import PropTypes from "prop-types";
import { useState } from "react";

function Nome ( { aluno } )
{
    const nome = useState( aluno );

    return (
        <div>
            <h2>{nome}</h2>
        </div>
    );
}

Nome.propTypes = {
    aluno: PropTypes.string
};
    
Nome.defaultProps = {
    aluno: "Aluno"
};

export default Nome;