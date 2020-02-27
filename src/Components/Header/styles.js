import styled from 'styled-components';

export const Container = styled.div`
    header {
    padding: 5px;
    background: rgb(0, 55, 82);
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;

    }
    img {
        height: 80px;
        margin-left: 20px;
    }

    input {
        height: 35px;
        width: 700px;
        border-radius: 30px;
        border: none;
        text-align: center;
        font-size: 18px;
    }

    .userIcon {
        height: 40px;
        width: 50px;
        margin-right: 20px;
    }

    .searchIcon {
        width: 30px;
        color: rgba(157, 255, 0, 1);
    }
`;