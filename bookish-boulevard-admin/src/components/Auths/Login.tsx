import React from 'react'

export default function Login() {
    return (
        <div className="flex items-center justify-center w-screen h-screen">

            <div className='w-80% h-80% rounded-md'>
                <div>Logo</div>
                <form>
                    <input type="text" name="email" id="email"/>
                    <input type="passowrd" name="password" id="password"/>
                    <button>Login</button>
                </form>
            </div>

        </div>
    )
}
