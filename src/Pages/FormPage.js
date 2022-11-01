import React, { useState } from 'react'
import axios from 'axios';

const FormPage = () => {
    const [person, setPerson] = useState({nameSurname: "", description: "", hight: undefined, age: undefined});

    const handleSubmit = (e) => {
        console.log(person);
        e.preventDefault();
        axios.post(process.env.REACT_APP_API, person)
            .then(response => {
                console.log(response);
                alert("Person was added");
            })
            .catch(e => {
                console.log(e);
                alert("Something went wrong");
            });
        
    }

    return (
        <div className='relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100'>
            <div className='mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60'>
                <div className='p-4'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='text-gray-800 font-bold text-2xl mb-8'>Add a new person</h1>
                        <div className='flex items-center border-2 mb-8 py-2 px-3 rounded-2xl'>
                            <input
                                className=' pl-0 w-full outline-none border-none'
                                type='text'
                                required
                                name='NameSurname'
                                value={person.nameSurname}
                                placeholder='Name and Surname'
                                onChange={(e) => setPerson({ ...person, nameSurname: e.target.value})}
                            />
                        </div>
                        <div className='flex items-center border-2 mb-8 py-2 px-3 rounded-2xl'>
                            <textarea
                                className=' pl-0 w-full outline-none'
                                name='Description'
                                required
                                value={person.description}
                                placeholder='Description'
                                onChange={(e) => setPerson({ ...person, description: e.target.value})}
                            />
                        </div>
                        <div className='flex items-center border-2 mb-8 py-2 px-3 rounded-2xl'>
                            <input
                                className=' pl-0 w-full outline-none border-none'
                                type='number'
                                step='0.01'
                                required
                                name='Hight'
                                value={person.hight}
                                placeholder='Hight (in meters)'
                                onChange={(e) => setPerson({ ...person, hight: e.target.value})}
                            />
                        </div>
                        <div className='flex items-center border-2 mb-8 py-2 px-3 rounded-2xl'>
                            <input
                                className=' pl-0 w-full outline-none border-none'
                                type='number'
                                pattern='\d*'
                                required
                                name='Age'
                                value={person.age}
                                placeholder='Age (in years)'
                                onChange={(e) => setPerson({ ...person, age: e.target.value})}
                            />
                        </div>
                        <button type='submit' className='block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 transition-all duration-500 text-white font-semibold mb-2'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormPage;