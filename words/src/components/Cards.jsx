import React from "react";

export default function Cards({words}, count) {
    const{ english, transcription, russian, tags, id } = words
    
    return (
        <div className="animation" >
        <h1>{english}</h1>
        <p>{transcription}</p>
        <h1>{russian}</h1>
        <p>{tags}</p>
        </div>
    );
}