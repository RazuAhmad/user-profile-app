import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

function UpdateUserProfile() {
    const { register, handleSubmit ,reset,setValue} = useForm();
    const [allUsers,setAllUsers]=useState([]);
    const [SpecificUser,setSpecificUser]=useState([]);

    const notify = () => toast("Successfully updated user");
    const {id}=useParams();
    
    const {name,sector}=SpecificUser;

// Show number of users profile are stored...
useEffect(()=>{
    fetch("http://localhost:5000/users")
    .then(res=>res.json())
    .then(data=>setAllUsers(data))
  },[]);

//   Specific user's 
useEffect(()=>{
    fetch(`http://localhost:5000/users/${id}`)
    .then(res=>res.json())
    .then(data=>setSpecificUser(data))
  },[id]);


    // OnSubmit handler.....
    const onSubmit = (data) => { 
        console.log(data);
        notify();
    }
    console.log("Specific user",SpecificUser);
  return (

    <div className='py-20'>

<p className='font-bold text-center text-white text-3xl mx-5 mb-7'>If You want to update data then edit now. 
Your mongodb Unique Id is {id}
<br/>
your typed name: {name} <br/>
Your sector: {sector}
</p>

<p className='font-bold text-center text-white text-3xl mx-5 mb-7'>Total Number of Users: {allUsers.length}</p>
  <ToastContainer/>

    <form onSubmit={ handleSubmit(onSubmit
        ) } className="max-w-xl mx-auto 
          p-4 sm:p-8 md:p-12 lg:p-16 border-4 border-white rounded-3xl shadow-md bg-green-500 SellForm-container_main ">
    
            {/* Name Input field */}
                <p className=' mb-4 font-bold text-xl'>
                <label htmlFor='name'  className='mb-1 text-white'>Name</label><br />
    
                <input id='name' required {...register("name")} className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"
                pattern="[A-Za-z ]+" title="Enter only alphabetic characters"  placeholder='Enter Your Name'/>
    
                </p>
    
              {/* Sectors select option field */}
                <p className=' mb-4 font-bold text-xl'>
                <label htmlFor="sector" className='text-white'>Sectors</label><br />
    
              <select id="sector" required multiple {...register("sector")}  className='class="w-full block px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' >
                <option value="Manufacturing">Manufacturing</option>
                <option value="Construction">Construction materials</option>
                <option value="Electronics and Optics">Electronics and Optics</option>
                <option value="Food and Beverage">Food and Beverage</option>
                <option value="Bakery & confectionery products">Bakery & confectionery products</option>
                <option value="Beverages">Beverages</option>
                <option value="Fish & fish products">Fish & fish products</option>
                <option value="">Meat & meat products</option>
                <option value="">Milk & dairy products</option>
                <option value="">Other</option>
                <option value="">Sweets & Snack food</option>
                <option value="">Furniture</option>
                
                <optgroup label="Fruits">
                <option value="apple">Apple</option>
                 <option value="banana">Banana</option>
                 <option value="orange">Orange</option>
                </optgroup>
                
                <option value="">Bathroom/sauna</option>
                <option value="">Bedroom</option>
    
              </select>
              </p>
    
              <p>
              <input id='checkbox' required {...register('checkbox')} type="checkbox" className='w-4 h-4'/>
              <label htmlFor="checkbox" className='text-white ml-2'>Agree to Terms & Conditions</label>  
              </p>
    
                <p>
                <input  className='text-white bg-green-700 border-2  mt-2 px-7 py-1 rounded cursor-pointer hover:bg-orange-700'  type="submit" value="Update" />
                </p>
            
                
            </form>
            </div>
  )
}

export default UpdateUserProfile