import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {

    const [username, usernameUpdate] = useState('');

    const handleChange = (e) => {
        console.log('User Wrote' , e.target.value);
        usernameUpdate(e.target.value);
    } 

    return (
        <LoginStyled className='Login'>
            <h1>Login</h1> 

            <input
                value={ username }
                onChange={ handleChange }
            />



        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    
`;