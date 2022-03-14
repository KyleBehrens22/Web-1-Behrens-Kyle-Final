import React from 'react';
import styled from 'styled-components';

import ReactPlayer from 'react-player'
import Video from './Video.jsx';

const YouTube = () => {

    return (
        <YouTubeStyled className='react-player'>
        <ReactPlayer width='960px' height='540px' controls url='https://youtu.be/DPuAAkYiE1I' />
        </YouTubeStyled>
    );
}

export default YouTube;

const YouTubeStyled = styled.div`
    display: flex;
    margin-bottom: 20px;
    padding: 20px;
    justify-content: center;
    position: relative;
    background-color: #f93e3e;  
`; 