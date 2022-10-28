import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonToAdd = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate('Form')} className='focus:ring-2 focus:ring-offset-2 
        focus:ring-indigo-600 mb-3 px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded-2xl'>
            <p className='text-sm font-medium leading-none text-white'>Add new person</p>
        </button>
    );
}

export default ButtonToAdd;