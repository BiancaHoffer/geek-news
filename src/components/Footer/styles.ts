import styled from "styled-components";

export const ContainerFooter = styled.footer`
    width: 100%;
    border-top: 2px solid ${props => props.theme["gray-500"]};
`

export const ContentFooter = styled.div`
    
    max-width: 1140px;
    margin: 0 auto;
    padding: 2.5rem;

    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    img {
        width: 9rem;
    }

    a {
        text-decoration: underline;
        
        &:hover {
                color: ${props => props.theme["red-500"]};
                transition: color 0.3s;
            }
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;

        input {
            border: 1px solid transparent;
            background-color: ${props => props.theme["gray-400"]};
            padding: 0.8rem 1rem;
            border-radius: 4px;
            color: white;
            

            &:focus {
                border: 1px solid ${props => props.theme["red-700"]};
                transition: color 0.3s;
            }
            
            &:hover {
                border: 1px solid ${props => props.theme["red-700"]};
                transition: color 0.3s;
            }    
        }

        button {
            background-color: ${props => props.theme["red-500"]};
            border: 0;
            color: white;
            font-weight: bold;
            width: fit-content;
            padding: 1rem 2rem;
            border-radius: 8px;

            &:hover {
                opacity: 0.8;
                transition: opacity 0.3s;
            }
        }
    }
`