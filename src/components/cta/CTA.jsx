import React, { useState, useEffect } from 'react';
import './cta.css';

const CTA = () => {

    const url = "https://api.quotable.io/random";
    const [quote, randomQuotes] = useState();
    useEffect(() => {
        fetch(url).then(r => r.json()).then(a => randomQuotes(a.content));
    }, [])

    function data() {
        fetch(url).then(r => r.json()).then(a => randomQuotes(a.content));
    };
    return (
        <div className="gpt3__cta" id="quotes">
            <div className="gpt3__cta-content">
                <h1>Daily Quotes</h1>
                <h3>{quote}</h3>
            </div>
            <div className="gpt3__cta-btn">
                <button type="button" onClick={data}>More!</button>
            </div>
        </div>
    );
}
export default CTA
