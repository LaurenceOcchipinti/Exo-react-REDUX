import React from 'react';

const Main = ({article, sujet}) => {
    return (
        <main>
            <h2>{article}</h2>
            <p> {sujet}</p>
        </main>
)

}

export default Main;