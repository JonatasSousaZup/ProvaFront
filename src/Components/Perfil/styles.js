import styled from 'styled-components';

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

export const Button = styled.button`
        height: 40px;
        width: 40px;
        margin-left: 18px;
        margin-top: 18px;
        background: none;
        border-style: none;

    .leftIcon {
        color: #FFF;
        height: 35px;
        width: 35px;
    }
`;

export const Section = styled.section`
    width: 100%;
    max-width: 600px;
    margin-top: 70px;
    margin-bottom: 30px;
    height: 500px;
    position: absolute;
    background: #FFF;
    border-radius: 15px;
    box-shadow: 5px 5px 5px #939598;
`;

export const Img = styled.img`
    border-radius: 200px;
    height: 40%;
`;