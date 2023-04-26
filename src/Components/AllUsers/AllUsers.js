import React, { useEffect, useState } from 'react'

function AllUsers() {
    const [allUserProfile,setAllUserProfile]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res=>res.json())
        .then(data=>setAllUserProfile(data))
      },[]);
      console.log(allUserProfile);
  return (
    <div>
<p className='font-bold text-center text-white text-3xl mx-5 mb-7'>Total Number of Users: {allUserProfile.length}</p>
        {
            allUserProfile.map(pd=><div className='border border-white mx-auto rounded-lg p-10 w-1/2 mb-7 bg-white font-bold text-lg' key={pd._id}>

                <p >User name: {pd.name}</p>
                <p>Sector: {pd?.sector}</p>

            </div>)
        }
    </div>
  )
}

export default AllUsers