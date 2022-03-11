import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHotTub, faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons';


const SiteLogo = () => {

    return (
        <SiteLogoStyled className='SiteLogo'>
            <FontAwesomeIcon icon={ faPizzaSlice } className='hot-tub-icon' />
        </SiteLogoStyled>
    );
}

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #ffffff;
    width: 100%;
    height: 100%;

    svg.hot-tub-icon {
        width: 100px;
        height: auto;
    }
`;