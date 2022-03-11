import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {

    return (
        <SiteTitleStyled className='SiteTitle'>
            <h2>Ky's Pies</h2>
            <h3>Los Angeles, CA</h3>
        </SiteTitleStyled>
    );
}

export default SiteTitle;

const SiteTitleStyled = styled.div`
color: #ffffff;
text-align: left;

    h2 {
        margin: 0px;
        font-size: 40px;
    }
    h3 {
        margin: 0px;
        font-size: 20px;
    }
    `;