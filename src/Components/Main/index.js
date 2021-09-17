import React from 'react';
import Counter from '../Counter';

const Main = ({article, sujet}) => {
    return (
        <main>
        <Counter />
            <h2>{article}</h2>
            <p> {sujet}</p>
        </main>
)

}

export default Main;