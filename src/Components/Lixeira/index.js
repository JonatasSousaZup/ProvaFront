import React from 'react'
import TableItem from '../TableItem'
import { Container, Tabela } from './styles';


export default function Lixeira() {
    return (
        <div>
            <Container>
                <Tabela>
                    <TableItem
                        imagem="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png"
                        nome="Joao"
                        email="joao.souza@zup.com.br"
                        telefone="(11)95455-6555"
                        cidade="São Paulo-SP"
                    />
                    <TableItem
                        imagem="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png"
                        nome="Maria"
                        email="maria.souza@zup.com.br"
                        telefone="(11)95455-6555"
                        cidade="São Paulo-SP"
                    />

                </Tabela>
            </Container>

        </div>
    )
}