import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignInPage() {
    const navigate=useNavigate()
    const execute=()=>{
        navigate('/')
        alert("Logged in successfully")


    }
    return (
        <div className="text-center m-5-auto">
            <h2>Welcome Back</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={()=>execute()}>Login</button>
                </p>
            </form>
            <footer>
                
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}