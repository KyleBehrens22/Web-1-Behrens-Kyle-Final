import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import UniversalForm, { Input, Textarea, SubmitButton } from 'React/common/UniversalForm/UniversalForm.jsx';

const Contact = ({children, id, label}) => {

    const onSubmitHandler = ({fields, payload}) => {
        console.log('onSubmit, fields, payload' , fields, payload);
    }

    return (
        <ContactStyled className='Contact'>
            <h1>Pick-Up Order</h1> 
            <UniversalForm
                apiUrl='/email/send'
                onSubmit={ onSubmitHandler }
            >
                <Input 
                    label='Name'
                    id='name'
                    placeholder="Your Name"
                    rules={ ['required'] }
                />
                <Input 
                    label='Email'
                    id='email'
                    type='email'
                    placeholder="username@email.com"
                    rules={ ['required', 'email'] }
                />
                <Input 
                    label='Address'
                    id='Address'
                    type='Address'
                    placeholder="Street Name, City, State, Zip"
                    rules={ ['required', 'address'] }
                />
                <Textarea 
                    label='Order'
                    id='message'
                    placeholder="I would like to order.."
                    rules={ ['required'] }
                />
                <SubmitButton>Send Order</SubmitButton>
            </UniversalForm>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
`;