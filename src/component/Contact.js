import React from 'react';

const Contact = ({
    fullName, 
    setFullName, 
    phoneNumber, 
    setPhoneNumber, 
    email, 
    setEmail
    }) => {
  return (
    <div className="flex flex-col gap-y-5">
        <h3 className='text-center text-2xl uppercase text-amber-600'>Enter your details</h3>
        <div className='flex flex-col gap-y-3 items-start'>
            <label htmlFor="name" className="text-base uppercase text-green-500">
                Full Name:
            </label>
            <input 
                type="text"
                name='name' 
                className="w-full form-input border-none outline-none bg-light/40 rounded focus:bg-light/80 shadow-md focus:shadow-xl focus:ring-0 py-4 px-3"
                placeholder="Enter your full name"
                required
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}  
            />
        </div>
        <div className='flex flex-col gap-y-3 items-start'>
            <label htmlFor="email" className="text-base uppercase text-green-500">
                Email:
            </label>
            <input 
                type="text" 
                name='email'
                className="w-full form-input border-none outline-none bg-light/40 rounded focus:bg-light/80 shadow-md focus:shadow-xl focus:ring-0 py-4 px-3"
                placeholder="Enter your email address"
                required 
                value={email}
                onChange={(event) => setEmail(event.target.value)} 
            />
        </div>
        <div className='flex flex-col gap-y-3 items-start'>
            <label htmlFor="phone" className="text-base uppercase text-green-500">
                Phone number:
            </label>
            <input 
                type="number"
                name='number' 
                className="w-full form-input border-none outline-none bg-light/40 rounded focus:bg-light/80 shadow-md focus:shadow-xl focus:ring-0 py-4 px-3"
                placeholder="Enter your phone number"
                required 
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)} 
            />
        </div>
    </div>
  )
}

export default Contact
