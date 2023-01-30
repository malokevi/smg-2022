import styled from "styled-components";

export const Hamburger = styled.button`
    border: none;
    background: transparent;

    span {
        width: 40px;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.text.dark};
        display: block;
        margin: 8px auto;
        transition: all 0.3s ease-in-out;
        border-radius: 5px;
    }
    
    &:hover{
        cursor: pointer;
    }

    &.is-active span:nth-child(2){
        opacity: 0;
    }

    &.is-active span:nth-child(1) {
        transform: translateY(11px) rotate(45deg);
    }

    &.is-active span:nth-child(3){
        transform: translateY(-11px) rotate(-45deg);
    }
`
