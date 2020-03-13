import styled from 'styled-components';

export const Container = styled.div`
        display: flex;
        justify-content: center;

    table {
        background: #FFF;
        font-size: 18px;
        box-shadow: 3px 4px 6px gray;
        border-radius: 10px;
        padding: 5px;
        margin-top: 20px;
    }
    td {
        padding: 10px;
    }

    img {
        border-radius: 200px;
        height: 40px;
        margin-left: 15px; 
    }

    td.nome {
        color: black;
        padding-right: 45px;
    }

    td.email {
        padding-right: 20px;
    }

    td.cidade {
        padding-right: 80px;
        padding-left: 20px;
    }
`;