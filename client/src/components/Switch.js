// import { useDarkMode } from './hooks/useDarkMode';
import React, { useState } from 'react';

const Switch = () => {
    // const [darkMode, setDarkMode] = useState
    //     useDarkMode('darkMode', false, toggleMode);

    const toggleMode = e => {
        //     e.preventDefault();
        //     setDarkMode(!darkMode);

    };

    return (
        <div className="switch">

            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                // className={darkMode ? 'toggle' : 'toggle toggled'}
                />
            </div>
        </div>
    );
}

export default Switch;