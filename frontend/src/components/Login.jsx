import { useContext, useState } from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../utlis/helper.js";
import axiosInstance from "../utlis/axiosInstance.js";
import { API_PATHS } from "../utlis/apiPaths.js";

import { authStyles as styles } from "../assets/dummystyle";
import { Input } from "./Inputs.jsx";


const Login = ({setCurrentPage}) => {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleLogin =  async (e) => {
    e.preventDefault();
    if(!validateEmail(email)) {
          setError('Please enter a valid email')
          return;
        }
        if(!password) {
          setError('Please enter password')
          return;
        }
        setError('');

        try {
          

          const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {email, password});
          const {token} = response.data;
          if(token){
             localStorage.setItem('token', token);
        updateUser(response.data);
        navigate('/dashboard')
          }

        } catch (error) {
          setError(error.response?.data?.message || 'Something went wrong')
        }
  } 

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.title}>Welcome Back</h3>
        <p className={styles.subtitle}>
          Sign in to continue building amazing resumes
        </p>
      </div>

      {/**form */}

      <form onSubmit={handleLogin} className={styles.form}>

       <Input value={email} onChange={({target}) => setEmail(target.value)}
               label='Email'
               placeholder='johndoe@gmail.com'
               type='email' />
       
               <Input value={password} onChange={({target}) => setPassword(target.value)}
               label='Password'
               placeholder='Min 8 characters'
               type='password' />
               {error && <div className={styles.errorMessage}>{error}</div>}
               <button type='submit' className={styles.submitButton}>
                  Login
               </button>

               <p className={styles.switchText}>
                         Don't have an account? {' '}
                         <button type='button' className={styles.signupSwitchButton} onClick={() => setCurrentPage('signup')}>
                          Sign Up
                         </button>
                       </p>

      </form>

    </div>
  )
}

export default Login