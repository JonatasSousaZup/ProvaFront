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
                        nome="Jonatas"
                        email="jonatas.sousa@zup.com.br"
                        telefone="(11)97512-5465"
                        cidade="Ferraz de Vanconcelos-SP"
                    />
                </Tabela>
            </Container>
    );
}