import React from 'react';
import { useLocation } from 'react-router-dom';

const PersonPage = () => {
    const { state } = useLocation();
    const { person } = state;

    return (
        <div className='relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100'>
            <div className='mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60'>
                <div className='p-4'>
                    <h1 className='text-2xl font-medium text-slate-600 pb-2'>{person.nameSurname}</h1>
                    <p className='text-sm tracking-tight font-light text-slate-400 leading-6'>{person.description}</p>
                    <div className='flex-1'>
                        <small className='text-blue-400 text-xs pr-2'>Age: {person.age} years</small>
                        <small className='text-blue-400 text-xs pl-2'>Hight: {person.hight} meters</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonPage;