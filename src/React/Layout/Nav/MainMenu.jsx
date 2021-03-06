import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js'

const MainMenu = ({showMenuUpdate}) => {
    
const clickHandler = () => {
    showMenuUpdate(false);
}

    return (
        <MainMenuStyled className='MainMenu'>
            <NavLink onClick={ clickHandler } to={ '/' } exact>Welcome</NavLink>
            <NavLink onClick={ clickHandler } to={ '/services' }>Menu</NavLink>
            <NavLink onClick={ clickHandler } to={ '/contact' }>Order</NavLink>
            <NavLink onClick={ clickHandler } to={ '/login' }>Login</NavLink>
            <NavLink onClick={ clickHandler } to={ '/homework' }>Homework</NavLink>
        </MainMenuStyled>
    );
}

export default MainMenu;

const MainMenuStyled = styled.div`
    a {
        display: block;
        color: white;
        margin: 5px 0px;
        background-color: #f93e3e;
        height: 50px;
        line-height: 55px;
        text-decoration: none;
        text-align: center;

        border-radius: 5px;

        text-transform: uppercase;
        font-weight: bold;

        &:hover {
            background-color: #ffcd51;
        }
        &.active {
            color: #ffffff;
            background-color: #54d378;
        }

    }
    @media ${defaultMediaQueries.mdUp} {
                display: flex;
                justify-content: center;
                a {
                    display: inline-block;
                    width: 150px;
                    margin: 0px 10px;
                    font-size: 16px;
                    border-radius: 5px;
            }
        }
`;