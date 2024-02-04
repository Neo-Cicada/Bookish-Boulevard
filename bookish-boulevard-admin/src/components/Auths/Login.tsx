import React from 'react'

export default function Login() {
    return (
        <div className="flex items-center justify-center w-screen h-screen border border-red-500">

            <div className='w-[50%] h-[80%] rounded-md flex flex-col border border-red-500 justify-around'>
                <div>Logo</div>
                <form className="flex flex-col">
                    <input type="text" name="email" id="email"/>
                    <input type="passowrd" name="password" id="password"/>
                    <button>Login</button>
                </form>
            </div>

        </div>
    )
}
