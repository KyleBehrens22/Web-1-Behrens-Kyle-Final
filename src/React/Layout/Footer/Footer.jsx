import React from 'react';
import styled from 'styled-components';

import Logo from './SiteTitle.jsx';
import SiteTitle from './Logo.jsx';

const Footer = () => {

    return (
        <FooterStyled className='Footer'>
            <Logo />
            <SiteTitle />
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: teal;
    text-align: center;
    padding: 20px 0 px;
`;