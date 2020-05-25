import React from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';


export interface LoginError {
    email: string
    password: string
}

function Login() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values)
        }
    
    })



    return (
        <div style={loginBackground}>
            
            <div style={loginForm}>

                <div style={loginTitle}>Login</div>

                <form onSubmit={formik.handleSubmit}>

                    <span className="p-float-label" style={inputContainer} >
                        <InputText 
                            style={inputStyle}
                            id="email"
                            type="email"
                            value={formik.values.email} 
                            onChange={formik.handleChange}   
                        />
                        <label htmlFor="email">Email</label>
                    </span>

                    
                    <Password  
                        style={inputContainer}
                        id="password"
                        type="password"
                        value={formik.values.password} 
                        onChange={formik.handleChange}   
                    />

                    <Button 
                        label="Submit" 
                        className="p-button-raised" 
                        style={inputContainer}
                        type="submit"
                    />

                    <div style={thirdLogin}>
                        
                        <Button label="Facebook" style={facebookButton} />

                        <div style={orStyle}>or</div>

                        <Button label="Google" style={googleButton} />

                    </div>

                    <div style={forgotPassword}>Forgot password?</div>

                </form>

            </div>

        </div>
    );
}

export default Login;

const loginBackground = {
    background: 'linear-gradient(to bottom, #a1d4ff, #8583fe)',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const loginForm = {
    width: '320px',
    padding: '64px 16px',
    backgroundColor: '#fff'
};

const loginTitle = {
    color: '#6e82aa',
    fontSize: '20px',
    textAlign: 'center' as const,
    paddingBottom: '48px'
};

const inputContainer = {
    width: '100%',
    marginBottom: '24px'
};

const inputStyle = {
    width: '100%'
};

const facebookButton = {
   backgroundColor: '#4267B2',
   color: '#fff',
   width: '120px'
};

const googleButton = {
    backgroundColor: '#DB4437',
    color: '#fff',
    border: 'none',
    width: '120px'
};

const orStyle = {
    textAlign: 'center' as const,
};

const thirdLogin = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
};

const forgotPassword = {
    textDecoration: 'underline',
    color: '#6e82aa',
    cursor: 'pointer'
};
