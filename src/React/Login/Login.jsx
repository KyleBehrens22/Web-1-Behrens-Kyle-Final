import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import UniversalForm, { Input, Textarea, SubmitButton } from 'React/common/UniversalForm/UniversalForm.jsx';

const Login = ({children, id, label}) => {

    const onSubmitHandler = ({fields, payload}) => {
        console.log('onSubmit, fields, payload' , fields, payload);
    }

    return (
        <LoginStyled className='Login'>
            <h1>Login</h1>
            <UniversalForm
                apiUrl='/user/login'
                onSubmit={ onSubmitHandler }
            >
                <Input 
                    label='Username'
                    id='username'
                    placeholder="user@domain.com"
                    rules={ ['required'] }
                />
                <Input 
                    label='Password'
                    id='password'
                    type='password'
                    rules={ ['required'] }
                />
                <SubmitButton>Log in</SubmitButton>
            </UniversalForm>
        </LoginStyled>
    );
}


export default Login;

const LoginStyled = styled.div`
    
`;