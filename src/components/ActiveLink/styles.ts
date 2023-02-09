import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkActive = styled(NavLink)`
     &::after {
        content: '';
        height: 3px;
        width: 2.8rem;
        display: block;
        background-color: ${props => props.theme["red-500"]};
        position: absolute;
        top: 6.7rem;
        border-radius: 2px 2px 0 0 ;
    }

    &:hover {
        color: ${props => props.theme["gray-400"]};
        transition: color 0.2s;
    }
`

export const NavLinkInactive = styled(NavLink)`
    color: white;
     
     &:hover {
        color: ${props => props.theme["red-500"]};
        transition: color 0.2s;
     }
`