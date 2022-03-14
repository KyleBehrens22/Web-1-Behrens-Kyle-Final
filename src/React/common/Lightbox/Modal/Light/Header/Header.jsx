import React from 'react';
import styled from 'styled-components';

import Title from './Title.jsx';
import CloseButton from './CloseButton.jsx';

const Header = ({title, closeModal}) => {

    return (
        <HeaderStyled className='Header'>
            <Title  title={ title } />
            <CloseButton closeModal={ closeModal } /> 
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.div`
    display: flex;
    background-color: #169342;
    color: white;

    h4 {
        flex: 1;
    }

    .CloseButton {
        flex: 0 0 30px;
    }
`;