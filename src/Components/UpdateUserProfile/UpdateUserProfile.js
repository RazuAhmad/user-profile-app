import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


function UpdateUserProfile() {


    const [allUsers,setAllUsers]=useState([]);
    const [SpecificUser,setSpecificUser]=useState({});
    const [allSectors,setAllSectors]=useState([])

    const notify = () => toast("Successfully updated user!!");
    const {id}=useParams();
    const {name,sector,checkbox}=SpecificUser;

    const { register, handleSubmit ,setValue} = useForm({
      sector:sector
    });


  // Show number of users profile are stored...
  useEffect(()=>{
    fetch("https://hongkong-professionals.vercel.app/users")
    .then(res=>res.json())
    .then(data=>setAllUsers(data))
  },[]);

  // Specific user's 
useEffect(()=>{
    fetch(`https://hongkong-professionals.vercel.app/users/${id}`)
    .then(res=>res.json())
    .then(data=>{
     
    setSpecificUser(data);
    })
  },[id]);


// Show all sectors in the select option:::

useEffect(()=>{
  fetch("https://hongkong-professionals.vercel.app/userSector")
  .then(res=>res.json())
  .then(data=>{
    
    setAllSectors(data)
    
  })

},[])


useEffect(()=>{
    setValue("name",name);
setValue ("sector",sector);
console.log(sector);
setValue("checkbox",checkbox)
},[name,sector,checkbox,setValue])


    // OnSubmit handler.....
    const onSubmit = (data) => { 
        console.log(data);
       
        fetch(`https://hongkong-professionals.vercel.app/users/${id}`,{
          method:"PUT",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.modifiedCount>0 ){
            notify();
            
          }
          if(data.modifiedCount===0){
            alert("You haven't updated anything");
            
          }
        })
       
       
    }
    // console.log("Specific user",SpecificUser, "sector name",sector);
    // console.log("Sectors console",allSectors);
  return (

    <div className='py-20'>

<p className='font-bold text-center text-white text-3xl mx-5 mb-7 standard_font'>Update Your Submitted data Now! 
</p>


<p className='font-bold text-center text-white text-3xl mx-5 mb-7 standard_font'>Total Number of Users: {allUsers.length}</p>
  <ToastContainer type="alert"/>

    <form onSubmit={ handleSubmit(onSubmit
        ) } className="max-w-xl mx-auto 
          p-4 sm:p-8 md:p-12 lg:p-16 border-4 border-white rounded-3xl shadow-md bg-green-800 SellForm-container_main ">
            
            <p className='mb-7 text-white'>
           <Link to='/home'>
           <button type='button' className='bg-red-600 p-1 md:p-3 rounded-lg hover:bg-white hover:text-black'>
            <FontAwesomeIcon icon={faArrowLeft} size='2x' />
            <span className='text-2xl font-bold ml-2 '>
            Back to Home
            </span>
            
            </button>
           </Link>

            </p>

            {/* Name Input field */}
                <p className=' mb-4 font-bold text-xl'>
                <label htmlFor='name'  className='mb-1 text-white'>Name</label><br />
    
                <input id='name'  required {...register("name")} className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"
                pattern="[A-Za-z ]+" title="Enter only alphabetic characters"  placeholder='Enter Your Name'/>
    
                </p>
    
              {/* Sectors select option field */}
                <p className=' mb-4 font-bold text-xl'>
                <label htmlFor="sector" className='text-white'>Sectors</label><br />
    
              <select id="sector"  defaultValue={ sector}  required  {...register("sector")}  className='w-full block px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' >
              
              {
              allSectors.map(pd=><option  key={pd._id} value={pd.sector} >{pd.sector}</option>)
              }
    
              </select>
              </p>
    
              <p>
              <input id='checkbox'  required {...register('checkbox')} type="checkbox" className='w-4 h-4'/>
              <label htmlFor="checkbox" className='text-white ml-2'>Agree to Terms & Conditions</label>  
              </p>
    
                <p>
                <input  className='text-white bg-red-700 border-2  mt-2 px-7 py-1 rounded cursor-pointer hover:bg-orange-700'  type="submit" value="Update" />
                </p>
            
                
            </form>
            </div>
  )
}

export default UpdateUserProfile