import React from 'react';
import styled from 'styled-components';



const SiteLogo = () => {
        
            return (
        <SiteLogoStyled>        
                <img src="/assets/img/PizzaLogo-01.png" alt="PizzaLogo" />
        </SiteLogoStyled>
    );
}

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #ffffff;
    justify-content: center;
    width: 100%;
    height: 100%;
`;