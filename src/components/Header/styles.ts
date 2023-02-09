import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme["gray-500"]};
  height: 7rem;
`

export const ContentHeader = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  height: 7rem;
  padding: 0 2.5rem;

  display: flex;
  align-items: center;

  img {
    width: 12rem;
  }

  nav {
    margin-left: 7rem;
    display: flex;
    gap: 2rem;
  }

  div {
    margin-left: auto;
    background-color: ${props => props.theme["gray-300"]};
    padding: 0.6rem;
    font-weight: bold;
    border-radius: 4px;
  };
`