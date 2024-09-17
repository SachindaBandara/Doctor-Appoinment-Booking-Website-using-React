import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setNamel] = useState('')

 const onSubmitHandler = async (event) => {
    event.preventDefault()
 }

 return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg '>
        <p>{state === 'Sign Up' ? 'Create Account' : "Login"}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : "log in"} to book appointment</p>

        <div>
          <p>Full Name</p>
          <input type='text' onChange={(e)=>setName(e.target.name)} value={name} required/>
        </div>

        <div>
          <p>Email</p>
          <input type='email' onChange={(e)=>setName(e.target.name)} value={name} required/>
        </div>

        <div>
          <p><Password></Password></p>
          <input type='password' onChange={(e)=>setName(e.target.name)} value={name} required/>
        </div>

        <button>{state === 'Sign Up' ? 'Create Account' : "Login"}</button>
      </div>
    </form>
  )
}

export default Login
