import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error.message)
                // if(error.code) {
                //     console.log('you are cheater')
                // }
                // else(
                //     console.log('helloooo')
                // )
            })
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-john? <Link to='/signup'>Create New Account</Link> </small></p>
        </div>
    );
};

export default Login;