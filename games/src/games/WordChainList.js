import React from 'react';

const WordChainList = ({ text }) => {
    const textList = text.map(text => <div>{text}</div>)
    return (
        <>
            {textList}
        </>
    )
}

export default WordChainList;