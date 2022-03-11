import React from 'react';
import styled from 'styled-components';

import YouTube from './YouTube/YouTube.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff/Staff.jsx';

const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <h1>Welcome</h1> 
            <YouTube />
            <Tabbed />
            <Staff />
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;