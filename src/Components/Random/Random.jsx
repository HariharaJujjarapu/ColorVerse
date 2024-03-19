import React from 'react';
import './Random.css'; // Import CSS file directly
import { useState } from 'react';

function Random() {

    let [color, setColor] = useState('#59D5E0');

    const generateRandomColor = () => {
        let randomColor;
        do {
            randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        } while (randomColor === '#ffffff'); // Repeat until the color is not white
        setColor(randomColor); // Update color state with the generated color
    }    

    return (
        <div className="box"> {/* Use class names directly */}
            <div className="text-dark box-1">
                <h1 className='text-content'>
                    Welcome to <span style={{ color: color }}>ColorVerse!!</span>
                </h1>
                <h4 className='text-content'>Dive into a world of endless color possibilities! With just a click of the button below, unleash a cascade of vibrant hues to inspire your imagination.
                </h4>
                <button className='text-content p-3 btn' onClick={generateRandomColor}
                 style={{ color: color, border: `3px solid ${color}`  }}>
                    <h5>Generate Color</h5>
                </button>
            </div>
            <div className='box-2' style={{ backgroundColor: color }}>
                <h4 className='text-light'>{color.toUpperCase().slice(1)}</h4>
            </div>
        </div>
    );
}

export default Random;
