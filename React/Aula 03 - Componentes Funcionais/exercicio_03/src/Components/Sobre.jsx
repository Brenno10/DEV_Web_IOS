import React from "react";
const newStyle = {color: 'red', textAlign: 'center'};

function Sobre () {
    return (
        <article style={{marginTop: '70px'}}>
            <h2 style={newStyle}>O que é o react?</h2>
            <p style={{textIndent: '20px'}}>O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites.
            <br/>
            <br/>
            Os componentes dessa ferramenta foram desenvolvidos pelo Facebook. Ela foi lançada em 2013 como uma ferramenta JavaScript de código aberto. Atualmente, ela permanece na frente das suas principais competidoras, como a Angular e a Bootstrap, as duas bibliotecas JavaScript mais bem vendidas.</p>
        </article>
    );
}

export default Sobre