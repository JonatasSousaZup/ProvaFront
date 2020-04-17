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

export const Linha = styled(Link)`
    .leftIcon {
        color: #FFF;
        height: 35px;
        width: 35px;
        margin-top: 25vh;
        margin-right: 205vh;
    }
`;

export const Section = styled.section`
    display: grid;
    grid-template-rows: 4fr 2fr 1fr;
    width: 100%;
    max-width: 700px;
    margin-top: 50px;
    margin-bottom: 30px;
    height: 600px;
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
    margin-left: 15vh;
    margin-right: 15vh;
`;

export const Img = styled.img`
    display: flex;
    justify-content: center;
    margin-left: 40vh;
    margin-top: 50px;
    border-radius: 200px;
    height: 32vh;
    border: 3px solid #FFF;
    box-shadow: 2px 2px 1px gray;
`;

export const Info = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
`;

export const Span = styled.span`
    font-size: 20px;
`;

export const H1 = styled.h1`
    font-size: 35px;
    margin-bottom: 20vh;
`;