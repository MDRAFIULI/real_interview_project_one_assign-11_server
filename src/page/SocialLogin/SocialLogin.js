import React from 'react';
import './SocialLogin.css';
import google from '../../images/google/Google2.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || '/';
    let displayError;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        displayError = <p className='text-danger'>Error: {error?.message} </p>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    /* if (token) {
        navigate(from, { replace: true });
    } */
    const handleSignInWithGoogle = (e) => {
        e.preventDefault();
        signInWithGoogle();
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
            </div>
            {displayError}
            <div className=''>
                <button
                    onClick={handleSignInWithGoogle}
                    className='btn btn-success w-50 d-block mx-auto my-2'>
                    <img style={{ width: '35px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;