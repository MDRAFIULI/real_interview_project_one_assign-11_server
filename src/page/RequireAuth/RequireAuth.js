import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    console.log(user);
    if (!user?.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className='text-danger'>Please Verify your email address</h3>
            <button
                className='btn btn-success'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send Verification
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;