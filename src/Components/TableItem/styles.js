import styled from 'styled-components'

export const Img = styled.img`
    border-radius: 200px;
    height: 40px;
    margin-left: 15px;
`;

export const Td = styled.td`
    padding: 15px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Tr = styled.tr`
    width: 100%;
    border-bottom: 2px solid #939598;

    :last-child {
        border-bottom: none;
    }
`;