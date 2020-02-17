import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
    position: absolute;
    left: 5%;
    right: 5%;
    padding: 0 30px;
    background: rgb(0, 55, 82);
    color: #FFF;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 80px;
    }

    input {
        justify-content: center;
        align-items: center;
        height: 35px;
        width: 700px;
        border-radius: 30px;
    }

    .userIcon {
        height: 40px;
        width: 50px
    }
`;