
import { useState } from 'react';
import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../Firebase"
import { signInWithGoogle } from "../Firebase"
import { useNavigate } from "react-router-dom"


const Login = () => {

const navigate = useNavigate()
    
const [logEmail, setLogEmail] = useState("")
const [logPass, setLogPass] = useState("")


  const loginUser = async () => {

    try {
      const user = await signInWithEmailAndPassword(auth,logEmail,logPass)
        console.log(user)
        navigate(-1)
    } catch (error) {
      console.log(error.message)
    }
 
 }




  return (
    <div className="loginpage w-[100vw] h-[100vh] flex justify-center  " >
    
  
      
    <div className="bg-black  w-[350px] h-[250px] mt-[380px] rounded-lg shadow-lg shadow-gray-200 flex flex-col justify-center items-center gap-4 "> 
          <div className="w-[80%]">
            <p className="text-start  text-white font-bold ">
              E-mail
            </p>
            <input
            type="e-mail"
            placeholder="Enter Your E-mail Adress"
            className="w-[100%] rounded-md indent-2 h-8"
            value={logEmail}
            onChange={(e) => setLogEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="w-[80%]">
          <p className="text-start text-white font-bold ">
          Password
        </p>
        <input
            type="password"
            placeholder="Enter Your Pasword"
            className="w-[100%] rounded-md indent-2 h-8"
            value={logPass}
            onChange={(e) => setLogPass(e.target.value)}
            required
        />
        <div className="w-full d-flex justify-content-center align-items-center  ">
          <button className=" w-[100%] bg-blue-600 text-white rounded-md p-1 mt-5 "
        onClick={loginUser} 
          >
           Login
            </button>
                      <br />
            <button className=" w-[100%] bg-blue-600 text-white rounded-md p-1 mt-2 "
        onClick={signInWithGoogle} 
          >
          Sign in with Googgle
            </button>

        </div>
       
      </div>
    </div>
    </div>
  );


}

export default Login