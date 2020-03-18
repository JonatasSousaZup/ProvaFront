import React from 'react';
import { Container , Tabela , Td , Tr , Img } from './styles';
import { MdSelectAll, MdEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { GoTrashcan } from 'react-icons/go'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom';

export default function Table() {
    return (
        <div>
            <Container>
                <Tabela>
                    <Tr>
                        <Link to="/perfil">
                            <Td><Img src="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png" /></Td>
                        </Link>
                        <Td className="nome"> Jonatas</Td>
                        <Td className="email"><MdEmail /> jonatas.sousa@zup.com.br</Td>
                        <Td className="telefone"><FiPhone /> (11)96666-7777</Td>
                        <Td className="cidade"><AiOutlineHome /> Ferraz de Vasconcelos-SP</Td>
                        <Td className="icones"><GoTrashcan /> <MdSelectAll /> </Td>
                    </Tr>
                    <Tr>
                        <Link to="/perfil">
                            <Td><Img src="https://api.adorable.io/avatars/hi_mom" /></Td>
                        </Link>
                        <Td className="nome">Tiago</Td>
                        <Td className="email"><MdEmail /> tiago.lima@zup.com.br</Td>
                        <Td className="telefone"><FiPhone /> (11)94002-8922</Td>
                        <Td className="cidade"><AiOutlineHome /> Barueri-SP</Td>
                        <Td className="icones"><GoTrashcan /> <MdSelectAll /> </Td>
                    </Tr>
                    <Tr>
                        <Link to="/perfil">
                            <Td><Img src="https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895" /></Td>
                        </Link>
                        <Td className="nome">Bruno</Td>
                        <Td className="email"><MdEmail /> bruno.augusto@zup.com.br</Td>
                        <Td className="telefone"><FiPhone /> (11)90000-1111</Td>
                        <Td className="cidade"><AiOutlineHome /> Ferraz de Vasconcelos-SP</Td>
                        <Td className="icones"><GoTrashcan /> <MdSelectAll /> </Td>
                    </Tr>
                </Tabela>
            </Container>
        </div>
    );
}