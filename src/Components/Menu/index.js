import React from 'react';
import { Container, Linha } from './styles'
import { MdDoneAll, MdSelectAll } from 'react-icons/md'
import { GoTrashcan } from 'react-icons/go'

export default function Menu() {

    return (
        <Container>
            <Linha to="/" active={true}><MdSelectAll /> Todos</Linha>
            <Linha to="/atendidos"><MdDoneAll /> Atendidos</Linha>
            <Linha to="/lixeira"><GoTrashcan /> Lixeira</Linha>
        </Container>
    )
}