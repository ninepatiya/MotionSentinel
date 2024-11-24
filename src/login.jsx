import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow -lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-white text-center mb-6">Login</h1>
               <form action="">
               <div className="relative my-4">
                    <input type="email" className="black w-72 py-2.3 px-0" />
                    <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Your Email</label>
                </div>
                <div className="relative my-4">
                    <input type="password" />
                    <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
                </div>
                <div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="Remember Me"></label>
                    </div>
                    <span>Forget Password?</span>
                </div>
                <button type="submit">Login</button>
                <div>
                    <span>New Here? <Link to='Register'>Create an account</Link></span>
                </div>
               </form>
                </div>
            </div>
    )
}

export default Login;