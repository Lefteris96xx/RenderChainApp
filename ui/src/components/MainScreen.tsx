import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

interface Props {
    title: string;
}

const MainScreen: React.FC<Props> = ({ title }) => {
    const [counter, setCounter] = useState(0);
    const history = useNavigate();

    const handleLogin = () => {
        // navigate to another page
        history.navigate('/another-page');
    };

    return (
        <div>
            <h1>{title}</h1>
            <p>Counter: {counter}</p>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default MainScreen;

