import React from 'react';


import { Container, Linha } from './styles'
import { MdDoneAll, MdSelectAll } from 'react-icons/md'
import { GoTrashcan } from 'react-icons/go'
import Atendido from './Components/Atendido'


export default function Menu() {

    return (
        <div>
            <Container>
                <ul>
                    <Linha active={true}><MdSelectAll/> Todos</Linha>
                    <Link to="Atendido"><MdDoneAll/> Atendidos</Link>
                    <Linha><GoTrashcan/> Lixeira</Linha>
                </ul>
            </Container>
            <Route exact path="/atendido" component={Atendido}/>
        </div>
    )
}