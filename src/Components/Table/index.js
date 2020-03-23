import React from 'react';
import TableItem from '../TableItem';

import { Container , Tabela , Td , Img , Tr } from './styles';


export default function Table() {
    return (
        <div>
            <TableItem 
            nome="Tiago"
            email="Tiago.Souza@zup.com.br"
            telefone="(11)8560864806/"
            cidade="São paulo"
            />

             {/* <Container>
            
                 <Tabela>
                    <Tr>
                        <Link to="/perfil">
                            <Td><Img src="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png" /></Td>
                        </Link>
                        <Td className="nome">Jonatas</Td>
                        <Td className="email"><MdEmail /> jonatas.sousa@zup.com.br</Td>
                        <Td className="telefone"><FiPhone /> (11)96666-7777</Td>
                        <Td className="cidade"><AiOutlineHome /> Ferraz de Vasconcelos-SP</Td>
                        <Td className="icones"><GoTrashcan /> <MdSelectAll /> <MdDoneAll /></Td>
                    </Tr>
                    <Tr>
                        <Link to="/perfil">
                            <Td><Img src="https://api.adorable.io/avatars/hi_mom" /></Td>
                        </Link>
                        <Td className="nome">Tiago</Td>
                        <Td className="email"><MdEmail /> tiago.lima@zup.com.br</Td>
                        <Td className="telefone"><FiPhone /> (11)94002-8922</Td>
                        <Td className="cidade"><AiOutlineHome /> Barueri-SP</Td>
                        <Td className="icones"><GoTrashcan /> <MdSelectAll /> <MdDoneAll /></Td>
                    </Tr>
                    <Tr>
                        <Link to="/perfil">
                            <Td><Img src="https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895" /></Td>
                        </Link>
                        <Td className="nome">Bruno</Td>
                        <Td className="email"><MdEmail /> bruno.augusto@zup.com.br</Td>
                        <Td className="telefone"><FiPhone /> (11)90000-1111</Td>
                        <Td className="cidade"><AiOutlineHome /> Ferraz de Vasconcelos-SP</Td>
                        <Td className="icones"><GoTrashcan /> <MdSelectAll /> <MdDoneAll /></Td>
                    </Tr>
                </Tabela> 
            </Container> */}
        </div>
    );
}