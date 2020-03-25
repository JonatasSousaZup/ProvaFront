import styled from 'styled-components';

export const Container = styled.div``;

export const Head = styled.header`
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFF;
    background: #0e1a33;

    .userIcon {
        height: 40px;
        width: 50px;
        margin-right: 20px;
    }

    .searchIcon {
        height: 20px;
        width: 30px;
        color: #8dc63f;
    }

`;

export const Img = styled.img`
    height: 80px;
    margin-left: 20px;
    background: #FFF;
    border-radius: 18px;
`;

export const Input = styled.input`
    height: 35px;
    width: 700px;
    border-radius: 30px;
    border: none;
    text-align: center;
    font-size: 18px;
`;