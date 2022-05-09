import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Login = () => {
    const emailRef = useRef('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/signup');
    }
    let displayError;
    if (error) {
        displayError = <p className='text-danger'>Error: {error?.message}</p>
    };
    /* const [token] = useToken(user); */

    if (loading || sending) {
        return <Loading></Loading>
    }

    /* if (token) {
        navigate('/home');
    } */


    const handleLogin = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);
        navigate(from, { replace: true });
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <div className='signup-form'>
            <h2 style={{ textAlign: 'center' }}>Please Login</h2>
            <form onSubmit={handleLogin}>

                <input type="email" name="email" id="" ref={emailRef} placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input
                    className='w-50 mx-auto btn btn-success mt-2'
                    type="submit"
                    value="Login" />
            </form>
            {displayError}
            <br />
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <p>New to Green Lab? <Link to="/signup" className='text-success pe-auto text-decoration-none' onClick={navigateLogin}>Please Sign Up</Link> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;

// const Login = () => {
//     const emailRef = useRef('');
//     const passwordRef = useRef('');
//     const navigate = useNavigate();
//     const location = useLocation();

//     let from = location?.state?.from?.pathname || "/";
//     let displayError;
//     /* const [
//         signInWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useSignInWithEmailAndPassword(auth);
//     console.log(user);
//     const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
//     // const [token] = useToken(user);

//     if (loading || sending) {
//         return <Loading></Loading>
//     }
//     //aage user paile navigate krto , ekhon token paile navigate kre, ejonno form er handle e last e navigate dilam
//     // if (token) {
//     //     navigate(from, { replace: true });
//     // }
//     if (user) {
//         navigate(from, { replace: true });
//     }

//     if (error) {
//         displayError = <p className='text-danger'>Error: {error?.message}</p>
//     } */

//     const handleSubmit = async event => {
//         event.preventDefault();
//         const email = emailRef?.current?.value;
//         const password = passwordRef?.current?.value;

//         // await signInWithEmailAndPassword(email, password);
//         /* const { data } = await axios.post('https://obscure-island-04927.herokuapp.com/login', { email })
//         localStorage.setItem('accesstoken', data?.accessToken) */
//         /* navigate(from, { replace: true }); */
//     }

//     const navigateSignUp = event => {
//         navigate('/signup');
//     }

//     const resetPassword = async () => {
//         const email = emailRef?.current?.value;
//         if (email) {
//             // await sendPasswordResetEmail(email);
//             toast('Sent email');
//         }
//         else {
//             toast('please enter your email address');
//         }
//     }

//     return (
//         <div className='container w-50 mx-auto'>
//             <PageTitle title="Login"></PageTitle>
//             <h2 className='text-primary text-center mt-2'>Please Login</h2>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
//                 </Form.Group>
//                 <Button variant="success w-50 mx-auto d-block mb-2" type="submit">
//                     Login
//                 </Button>
//             </Form>
//             {displayError}
//             <p>New to Green Lab? <Link to="/register" className='text-success pe-auto text-decoration-none' onClick={navigateSignUp}>Please Register</Link> </p>
//             <p>Forget Password? <button className='btn btn-link text-success pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
//             <p>new user? <Link to="/register" className='text-success pe-auto text-decoration-none'>Please rgister</Link> </p>
//             <SocialLogin></SocialLogin>

//         </div>
//     );
// };

// export default Login;