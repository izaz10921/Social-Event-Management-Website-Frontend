import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
    }
    return (
        <div>
            
            <div>
                <h2 className="my-10 text-3xl text-center">Register your account</h2>

                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
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
                <p className="text-center mt-4">Already have an account? <Link className="text-orange-500 font-bold" to='/login'>Login</Link> </p>
            </div>


        </div>
    );
};

export default Register;