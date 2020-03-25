import React from 'react';
import TableItem from '../TableItem';
import { Container, Tabela } from './styles';

export default function Table() {
    return (
        <Container>
            <Tabela>
                <TableItem
                    imagem="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png"
                    nome="Tiago"
                    email="tiago.souza@zup.com.br"
                    telefone="(11)95455-6555"
                    cidade="São Paulo-SP"
                />
                <TableItem
                    imagem="https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895"
                    nome="Jonatas"
                    email="jonatas.sousa@zup.com.br"
                    telefone="(11)95105-6894"
                    cidade="Ferraz de Vasconcelos-SP"
                />
            </Tabela>
        </Container>
    );
}