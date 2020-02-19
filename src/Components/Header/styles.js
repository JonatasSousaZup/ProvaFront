import styled from 'styled-components';

export const Container = styled.div`
    height: 80px;
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
        height: 35px;
        width: 700px;
        border-radius: 30px;
        text-align: center;
        font-size: 18px;
    }

    .userIcon {
        height: 40px;
        width: 50px
    }

    .searchIcon {
        width: 30px;
    }
`;