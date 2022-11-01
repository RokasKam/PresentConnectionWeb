import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TableData from '../Components/TableData';
import TableHead from '../Components/TableHead';
import ButtonToAdd from '../Components/ButtonToAdd';

const AllPersonsPage = () => {
  const navigate = useNavigate();
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API);
        setPersons(res.data);
      }
      catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  const itemClickHandler = async (id) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/${id}`);
      navigate('Person', { state: { person: res.data } })
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='bg-gradient-to-r from-rose-100 to-teal-100 relative min-h-screen'>
      <section className='py-1 bg-blueGray-50'>
        <div className=' xl:w-10/12  xl:mb-0 px-4 mx-auto mt-16 '>
          <ButtonToAdd />
          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-2xl '>
            <div className='block w-full overflow-x-auto'>
              <table className='items-center bg-transparent w-full border-collapse '>
                <thead>
                  <tr>
                    <TableHead data='Person id' />
                    <TableHead data='Name Surname' />
                    <TableHead data='Hight' />
                    <TableHead data='Age' />
                  </tr>
                </thead>
                <tbody>
                  {
                    persons.map(person =>
                      <tr key={person.id} onClick={() => itemClickHandler(person.id)}>
                        <TableData data={person.id} />
                        <TableData data={person.nameSurname} />
                        <TableData data={person.hight} />
                        <TableData data={person.age} />
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}

export default AllPersonsPage;


