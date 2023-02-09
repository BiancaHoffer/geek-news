import styled from "styled-components";

export const ContainerMain = styled.main`
    max-width: 1140px;
    padding: 40px;
    margin: 0 auto;

     display: flex;
     flex-direction: column;
     gap: 3rem;

     a {
        width: fit-content;
        padding: 1rem 2rem;
        border-radius: 8px;
        background-color: ${props => props.theme["red-500"]};
        font-weight: bold;

        &:hover {
            opacity: 0.7;
            transition: opacity 0.3s;
        }
     }
`

export const ContentImages = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;

     div {
        height: 100%;
        width: 100%;
        position: relative;
        opacity: 0.6;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
            transition: opacity 0.5s;
        }

        &:nth-child(1) {
            grid-row: 1 / 3;
        }

        &:nth-child(4) {
            grid-column: 1 / 3;
            height: 20rem;
            object-fit: cover;
        }
     }

    img {
        background-color: gray;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }

    p {
        position: absolute;
        bottom: 0.5px;
        background-color: ${props => props.theme["gray-400"]};
        width: 100%;
        border-radius: 0 0 8px 8px;
        padding: 2rem;
        opacity: 0.7;
    }
`