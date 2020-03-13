import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background: #FFF;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    padding-top: 10px;
    box-shadow: 3px 4px 6px gray;

    font-size: 25px;
    padding: 10px;

`;
export const Linha = styled(Link)`
    text-decoration: none;
    padding: 5px;
    color: ${({active}) => active ? "rgba(157, 255, 0, 1)" : "inherit"}
`;