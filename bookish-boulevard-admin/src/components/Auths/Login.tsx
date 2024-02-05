import React from 'react';

export default function Login() {
    return (
        <div className="flex items-center justify-center w-screen h-screen border border-red-500">
            <div className='border border-red-500 w-[40%] h-[80%] rounded-md flex flex-col justify-center'>
                <form className='flex flex-col items-center justify-center'>
                    <div>Logo</div>
                    <div className='flex flex-col w-1/2'>
                        <label htmlFor="email" className='text-md'>Email</label>
                        <input
                            placeholder='Email'
                            id='email'
                            name='email'
                            className='border border-red-500' />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label htmlFor="email" className='text-md'>Password</label>
                        <input
                            placeholder='Email'
                            id='email'
                            name='email'
                            className='border border-red-500' />
                    </div>

                </form>
            </div>
        </div>
    );
}
