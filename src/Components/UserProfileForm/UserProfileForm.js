import React from 'react'
import { useForm } from 'react-hook-form';

function UserProfileForm() {
  const { register, handleSubmit ,reset} = useForm();

  const onSubmit = (data) => {

    console.log(data);
    reset()
  };


  return (

  <div className='py-20'>

<p className='font-bold text-center text-white text-3xl mx-5 mb-7'>Please enter your name and pick the Sectors you are currently involved in.</p>
  
    
    <form onSubmit={handleSubmit(onSubmit
    )} className="max-w-xl mx-auto 
      p-4 sm:p-8 md:p-12 lg:p-16 border-4 border-white rounded-3xl shadow-md bg-gray-900 SellForm-container_main ">
            <p className='text-white mb-4 font-bold text-xl'>
            <label className='mb-1'>Name</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Enter Your Name'/>
            </p>

            <p className=' mb-4 font-bold text-xl'>
            <label for="payment" className='text-white'>Sectors</label><br />
          <select multiple {...register("currency")}  className='class="w-full block px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' id="payment">
            <option value="BFIC">Manufacturing</option>
            <option value="BLove">Construction materials</option>
            <option value="">Electronics and Optics</option>
            <option value="">Food and Beverage</option>
            <option value="">Bakery & confectionery products</option>
            <option value="">Beverages</option>
            <option value="">Fish & fish products</option>
            <option value="">Meat & meat products</option>
            <option value="">Milk & dairy products</option>
            <option value="">Other</option>
            <option value="">Sweets & Snack food</option>
            <option value="">Furniture</option>
            <option value="">Bathroom/sauna</option>
            <option value="">Bedroom</option>










          </select>
          </p>

          <p>
          <input type="checkbox" className='w-4 h-4' />
            <label for="payment" className='text-white ml-2'>Agree to Terms & Conditions</label>  
            </p>

            <p>
            <input  className='text-white bg-green-700 border-2  mt-2 px-7 py-1 rounded cursor-pointer hover:bg-orange-700'  type="submit" value="Save" />
            </p>
            
        </form>
        </div>
  )
}

export default UserProfileForm