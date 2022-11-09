
import { useState } from 'react';
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from "../Firebase"
import {signInWithGoogle} from "../Firebase"

const Login = () => {


const [logEmail, setLogEmail] = useState("")
const [logPass, setLogPass] = useState("")


  const loginUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth,logEmail,logPass)
      console.log(user)
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
            value={logEmail}
            onChange={(e) => setLogEmail(e.target.value)}
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
            value={logPass}
            onChange={(e) => setLogPass(e.target.value)}
            required
        />
        <div className="w-full d-flex justify-content-center align-items-center m-3 ">
          <button className=" w-[100%] bg-gray-800 text-white rounded-md p-1 mt-5 "
        onClick={loginUser} 
          >
           Login
            </button>
                      <br />
            <button className=" w-[100%] bg-gray-800 text-white rounded-md p-1 mt-2 "
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