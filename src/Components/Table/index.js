import React from 'react';
import { Container } from './styles';
import { MdSelectAll, MdDoneAll, MdEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { GoTrashcan } from 'react-icons/go'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom';


export default function Table() {
    return (
        <div>
            <Container>
                <table>
                    <tr>
                        <Link to="/perfil">
                        <td><img src="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png" /></td>
                        </Link>
                        <td className="nome">Jonatas</td>
                        <td className="email"><MdEmail /> jonatas.sousa@zup.com.br</td>
                        <td className="telefone"><FiPhone /> (11)96666-7777</td>
                        <td className="cidade"><AiOutlineHome /> Ferraz de Vasconcelos-SP</td>
                        <td className="icones"><GoTrashcan /> <MdSelectAll /> <MdDoneAll /></td>
                        
                    </tr>
                    <tr>
                        <td><img src="https://api.adorable.io/avatars/hi_mom" /></td>
                        <td className="nome">Tiago</td>
                        <td className="email"><MdEmail /> tiago.lima@zup.com.br</td>
                        <td className="telefone"><FiPhone /> (11)94002-8922</td>
                        <td className="cidade"><AiOutlineHome /> Barueri-SP</td>
                        <td className="icones"><GoTrashcan /> <MdSelectAll /> <MdDoneAll /></td>
                    </tr>
                    <tr>
                        <td><img src="https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895" /></td>
                        <td className="nome">Bruno</td>
                        <td className="email"><MdEmail /> bruno.augusto@zup.com.br</td>
                        <td className="telefone"><FiPhone /> (11)90000-1111</td>
                        <td className="cidade"><AiOutlineHome /> Ferraz de Vasconcelos-SP</td>
                        <td className="icones"><GoTrashcan /> <MdSelectAll /> <MdDoneAll /></td>
                    </tr>
                </table>
            </Container>
        </div>
    );
}