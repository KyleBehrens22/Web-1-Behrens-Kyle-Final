import React from 'react';
import styled from 'styled-components';

import Logo from './Logo.jsx';
import SiteTitle from './SiteTitle.jsx';

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
    background-color: #f93e3e;
    text-align: center;
    padding: 20px 0px;
`;