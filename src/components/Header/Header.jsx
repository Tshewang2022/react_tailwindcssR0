import React from 'react'
import './Header.css'

const Header = ()=>{
    return(
        <>
        <div className='bg-blue-950'>
            <div className="header flex">
                <div className='flex flex-auto w-full'>
                    <div className='text-white'>
                        <img src="/menu.png" alt="" className='w-[2rem] h-[2rem]'/>
                        </div>
                    <div className='text-white mx-[4px]'>
                        <img src="logo.png" alt="logo" className='h-[2.2rem]'/>
                    </div>
                </div>
                <div className='flex flex-auto w-full text-white'>
                    <input type="text" placeholder='search'className='w-full rounded-md h-[2rem] text-center text-black'/>
                </div>
                <div className='flex flex-auto w-full space-x-4 mx-[5px]'>
                    <div className='text-white'>En</div>
                    <div className='text-white'>Hello.signIn</div>
                    <div className='text-white'>Account</div>
                    <div className='text-white'>Return Order</div>
                    <div className='text-white'>try prime</div>
                    <div className="card text-white">card</div>
                </div>
            </div>
            <div className='flex'>
                <div className='flex flex-auto text-white'>Hello</div>
                <div className='flex flex-auto space-x-4'>
                    <div className='text-white'>best seller</div>
                    <div className='text-white'>gift idea</div>
                    <div className='text-white'>new release</div>
                    <div className='text-white'>todays deal</div>
                    <div className='text-white'>coupons</div>
                    <div className='text-white'>amazon basic</div>
                    <div className='text-white'>amazon pay</div>
                </div>
                <div className='flex flex-auto text-white'>should be empty</div>
            </div>
        </div>
        </>
    )
}
export default Header