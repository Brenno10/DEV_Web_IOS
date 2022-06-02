import React from 'react'
import PropTypes from 'prop-types'

function BoasVindas (props) {
  return (
    <section>
        <h1 style={{color: 'red', textAlign: 'center'}}>Seja bem-vindo(a) {props.name}</h1>
        <p style={{textAlign: 'center', fontStyle: 'italic'}}>Esta página é um exemplo de react sendo usado na prática.</p>
    </section>
  )
}

BoasVindas.defaultProps = {
    nome: 'Default Names',
}

BoasVindas.propTypes = {
    name: PropTypes.string,
};

export default BoasVindas