import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.header`
    background: #0e1a33;
    height: 50vh;
    width: 100%;
    margin-bottom: auto;
`;

export const Section = styled.section`
    width: 100%;
    max-width: 650px;
    margin-top: 120px;
    margin-bottom: 30px;
    height: 700px;
    position: absolute;
    background: #FFF;
    border-radius: 2px;
    box-shadow: 5px 5px 5px #939598;

    .Icons {
        height: 50px;
        width: 50px;
    }
`;

export const Img = styled.img`
    position: relative;
    left: 33%;
    margin-top: 50px;
    border-radius: 200px;
    height: 35%;
`;

export const Linha = styled(Link)`
    .leftIcon {
        color: #FFF;
        height: 40px;
        width: 40px;
        margin-top: 17px;
        margin-left: 17px;
    }
`;