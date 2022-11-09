import { useState } from 'react';
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from "../Firebase"

import{useNavigate} from "react-router-dom"

const Register = () => {

const navigate = useNavigate()
    
const [regEmail, setRegEmail] = useState("")
const [regPass, setRegPass] = useState("")


  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth,regEmail,regPass)
        console.log(user)
        navigate(-1)
    } catch (error) {
      console.log(error.message)
    }
 
 }




  return (
    <div className="relative" >
    {/* <img src={image} alt=""  className='h-[100vh] w-[100%] '/> */}
    <div className="bg-gray-500 opacity-75 w-[300px] h-[350px] absolute top-10 right-16 rounded-lg shadow-lg shadow-gray-200 flex flex-col justify-center items-center gap-4 "> 
          <div className="w-[80%]">
            <p className="text-start font-bold indent-2">
              E-mail
            </p>
            <input
            type="e-mail"
            placeholder="Enter Your E-mail Adress"
            className="w-[90%] rounded-md indent-2 h-8"
            value={regEmail}
            onChange={(e) => setRegEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="w-[80%]">
          <p className="text-start font-bold indent-2">
          Password
        </p>
        <input
            type="password"
            placeholder="Enter Your Pasword"
            className="w-[90%] rounded-md indent-2 h-8"
            value={regPass}
            onChange={(e) => setRegPass(e.target.value)}
            required
        />
        <div className="w-full d-flex justify-content-center align-items-center m-3 ">
          <button className=" w-[100%] bg-gray-800 text-white rounded-md p-1 mt-5 "
        onClick={registerUser} 
          >
           Register
            </button>
                     
            

        </div>
       
      </div>
    </div>
    </div>
  );


}

export default Register;