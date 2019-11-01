import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';



export const useDarkMode = (key, initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValues);

    useEffect(() => {
        const body = document.querySelector('body');
        if (darkMode === true) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode')
        }

    });

    return [darkMode, setDarkMode];
}