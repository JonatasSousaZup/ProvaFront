import React from 'react';

import { Container } from './styles'
import { MdDoneAll, MdSelectAll } from 'react-icons/md'
import { GoTrashcan } from 'react-icons/go'

export default function Menu() {

    return (
        <div>
            <Container>
                <ul>
                    <li><MdSelectAll/> Todos</li>
                    <li><MdDoneAll/> Atendidos</li>
                    <li><GoTrashcan/> Lixeira</li>
                </ul>
            </Container>
        </div>
    )
}