import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typewriter from "typewriter-effect";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function UserProfileForm() {
  const [allUsers,setAllUsers]=useState([]);
  const [allSectors,setAllSectors]=useState([]);

  const [mongoInsertedId,setMongoInsertedId]=useState("");
  const { register, handleSubmit ,reset,setValue} = useForm();

  const notify = () => toast("Successfully saved user");

// Show number of users profile are stored...
useEffect(()=>{
  fetch("http://localhost:5000/users")
  .then(res=>res.json())
  .then(data=>setAllUsers(data))
},[allUsers]);

// Show all sectors in the select option:::

useEffect(()=>{
  fetch("http://localhost:5000/userSector")
  .then(res=>res.json())
  .then(data=>setAllSectors(data))
},[])


// Load form data from session storage
useEffect(() => {
  
  const storedData = sessionStorage.getItem("form_data");
  if (storedData) {
    
    const data = JSON.parse(storedData);
    Object.keys(data).forEach((key) => {
      setValue(key, data[key]);
      // console.log(storedData);
    });
    reset();
  }
  // console.log(storedData);
 
}, []);


  const onSubmit = (data) => {

    console.log(data);

    fetch('http://localhost:5000/users',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(dataConfirmation=>{
     
      if(dataConfirmation.acknowledged){
       notify();
       setMongoInsertedId(dataConfirmation.insertedId)
      // Save form data to session storage
    sessionStorage.setItem("form_data", JSON.stringify(data));
    
      }
    })


    // // Update the input data.......
    // fetch(`http://localhost:5000/users/${mongoInsertedId}`,{
    //   method:"PUT",
    //   headers:{
    //     'content-type': 'application/json'
    //   },
    //   body:JSON.stringify(data)
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //   console.log(data);
    // })
    
  };


  return (

  <div className='py-20'>

<p className='font-bold  text-center text-white text-2xl md:text-3xl mb-7 standard_font'>Please enter your name and pick the Sectors you are currently involved in.</p>


<h1 className="font-bold text-center text-white  text-3xl  mb-7 standard_font">
          <Typewriter
            options={{
              strings: [`Total Number of Users: ${allUsers.length}`],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

  <ToastContainer/>
    
    <form onSubmit={ handleSubmit(onSubmit
    ) } className="max-w-xl mx-auto 
      p-4 sm:p-8 md:p-12 lg:p-16 border-4 border-white rounded-3xl shadow-md bg-gray-900 SellForm-container_main ">

        {/* Name Input field */}
            <p className=' mb-4 font-bold text-xl'>
            <label htmlFor='name' className='mb-1 text-white'>Name</label><br />

            <input id='name'  required {...register("name")} className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"
            pattern="[A-Za-z ]+" title="Enter only alphabetic characters"  placeholder='Enter Your Name'/>

            </p>

          {/* Sectors select option field */}
          <p className=' mb-4 font-bold text-md'>
          <label htmlFor="sector" className='text-white'>Sectors</label><br />

          <select id="sector" required multiple {...register("sector")}  className="w-full block px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" >
            {
              allSectors.map(pd=><option key={pd._id} value={pd.sector} >{pd.sector}</option>)
            }
          </select>
          </p>

          <p>
         
          <input className='w-4 h-4' id='checkbox' required {...register('checkbox')} type="checkbox"  />
          <label htmlFor="checkbox" className='text-white ml-2'>Agree to Terms & Conditions</label>  
          </p>

          {
            mongoInsertedId ? 
            <p>
              <Link to={`/updateUserProfile/${mongoInsertedId}`}>
              <button type='button' className='text-white bg-red-700 border-2  mt-2 px-7 py-1 rounded cursor-pointer hover:bg-orange-700'>Want to Update your submitted data?</button>
              </Link>
            </p>

            :
            <p>
            <input  className='text-white bg-green-700 border-2  mt-2 px-7 py-1 rounded cursor-pointer hover:bg-orange-700'  type="submit" value="Save" />
            </p>
          }
            
        </form>
        </div>
  )
}

export default UserProfileForm