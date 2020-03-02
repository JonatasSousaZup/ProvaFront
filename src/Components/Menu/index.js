import React from 'react';


import { Container, Linha } from './styles'
import { MdDoneAll, MdSelectAll } from 'react-icons/md'
import { GoTrashcan } from 'react-icons/go'


export default function Menu() {

    return (
        <div>
            <Container>
                <ul>
                    <Linha active={true}><MdSelectAll/> Todos</Linha>
                    <Linha><MdDoneAll/> Atendidos</Linha>
                    <Linha><GoTrashcan/> Lixeira</Linha>
                </ul>
            </Container>
        </div>
    )
}