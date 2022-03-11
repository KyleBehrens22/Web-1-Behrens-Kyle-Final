import React from 'react';
import styled from 'styled-components';

import Video from './Video.jsx';

const YouTube = () => {

    return (
        <YouTubeStyled className='YouTube'>
            YouTube 
            <Video />
        </YouTubeStyled>
    );
}

export default YouTube;

const YouTubeStyled = styled.div`
    
`;