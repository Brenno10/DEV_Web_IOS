import PropTypes from "prop-types";

function Nota ({notas}) {
    let media = notas.reduce((previous, next) => previous + next) / notas.length;
    
    return (
        <div style={{textAlign: 'center'}}>
            <table>
                <thead>
                    <tr>
                        <th>Notas</th>
                        <th>Média</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <th>{notas.join(', ')}</th>
                        <th>{media}</th>
                    </tr>
                </tbody>
            </table>
            
            
        </div>
    );
}

Nota.propTypes = {
    notas: PropTypes.array.isRequired
};

Nota.defaultProps = {
    notas: [ 5, 5, 5, 5 ]
};

export default Nota;