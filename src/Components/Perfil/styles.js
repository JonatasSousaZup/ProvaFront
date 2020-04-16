import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    flex-direction: column;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(#0e1a33 50vh, #e6e7e8 50vh);
`;

export const Section = styled.section`
    display: grid;
    grid-template-rows: 4fr 2fr 1fr;
    width: 100%;
    max-width: 650px;
    margin-top: 120px;
    margin-bottom: 30px;
    height: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 5px 5px 5px #939598;
    background-image: linear-gradient(#CFCFCF 25vh, #f1f2f2 25vh, #f1f2f2 50vh) ;

    .Icons {
        height: 50px;
        width: 50px;
        transition: color 0.5s;

        :hover {
            color: #8dc63f
            }        
    }
`;
export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Img = styled.img`
    position: relative;
    margin-left: 40vh;
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