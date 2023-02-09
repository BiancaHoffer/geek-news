import styled from "styled-components";

export const ContainerPosts = styled.main`
    width: 100%;
    max-width: 1140px;
    padding: 2.5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div {
        display: grid;
        grid-template-columns: 20rem 1fr;
        grid-template-rows: 1fr 3fr;
        align-items: top;
        gap: 1rem;
    
        img {
            width: 100%;
            grid-row: 1 / 3;
            border-radius: 8px;
        }

        h2 {
            &:hover {
                color: ${props => props.theme["red-500"]};
                transition: color 0.3s;
                cursor: pointer;
            }
        }
    }   
`