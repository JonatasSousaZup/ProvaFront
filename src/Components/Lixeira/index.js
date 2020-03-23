import React from 'react'
import TableItem from '../TableItem'
import { Container, Tabela } from './styles';


export default function Lixeira() {
    return (
        <div>
            <Container>
                <Tabela>
                     <TableItem
                        nome="Joao"
                        email="Joao.Souza@zup.com.br"
                        telefone="(11)95455-6555"
                        cidade="São Paulo-SP"
                    />
                     <TableItem
                        nome="Maria"
                        email="Maria.Souza@zup.com.br"
                        telefone="(11)95455-6555"
                        cidade="São Paulo-SP"
                    />
                   
                </Tabela>
            </Container>

        </div>
    )
}