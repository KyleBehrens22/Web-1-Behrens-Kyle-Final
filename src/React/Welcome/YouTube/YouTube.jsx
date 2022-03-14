import React from 'react';
import styled from 'styled-components';

import ReactPlayer from 'react-player'
import Video from './Video.jsx';

const YouTube = () => {

    return (
        <YouTubeStyled className='YouTube'>
        <ReactPlayer url='https://youtu.be/DPuAAkYiE1I' />
        </YouTubeStyled>
    );
}



export default YouTube;

const YouTubeStyled = styled.div`
    
`;