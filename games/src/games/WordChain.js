import React, { useState } from 'react';
import WordChainList from './WordChainList'


const WordChain = () => {

    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
        console.log(e.target.value)
    }


    return (
        <div>
            <h1>word-chain</h1>
            <form >
                <input value={text} onChange={handleChange}></input>
                <button type="submit">입력 </button>
            </form>
            <WordChainList />

        </div >
    );
};

export default WordChain;