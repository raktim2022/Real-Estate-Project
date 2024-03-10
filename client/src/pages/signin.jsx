// import React from 'react'
import { useState } from "react"
import { Link , useNavigate} from "react-router-dom"

export default function Signin() {
  const [formData, setformData] = useState({})
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false)
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true)
    const res = await fetch('/api/auth/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      }
    );
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
      setloading(false);
      seterror(data.message);
      return;
    }
      setloading(false)
      seterror(null)
      navigate('/')
    } catch (error) {
      setloading(false);
      seterror(error.message);
    }
  }
  const handlechange = (e) => {
    setformData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      }
    );
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-6">Sign In</h1>
      <form onSubmit={handlesubmit} className="flex flex-col gap-4" >
        <input type="email" placeholder="Email" className="border p-3 rounded-lg" id="email" onChange={handlechange} />
        <input type="password" placeholder="Password" className="border p-3 rounded-lg" id="password" onChange={handlechange} />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">{loading?'Loading...':'Sign In' }</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have an account?</p>
        <Link to={"/signup"}>
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
      {
        error && <p className="text-red-500 mt-5">{error}</p>
      }
    </div>
  )
}
