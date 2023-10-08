import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {
    const { logIn } = useContext(AuthContext);
    const navigate =useNavigate();
    const location =useLocation();

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        logIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state? location.state :'/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <div>
                <h2 className="my-10 text-3xl text-center">login your account</h2>

                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"
                            name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account? <Link className="text-orange-500 font-bold" to='/register'>Register</Link> </p>
            </div>



        </div>
    );
};

export default Login;