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
                        <td className="nome">Jonatas</td>
                        <td className="email"><MdEmail /> jonatas.sousa@zup.com.br</td>
                        <td className="telefone"><FiPhone /> (11)96666-7777</td>
                        <td className="cidade"><AiOutlineHome /> Ferraz de Vasconcelos-SP</td>
                        <td className="icones"><GoTrashcan /> <MdSelectAll /> <MdDoneAll /></td>
                        </Link>
                        
                    </tr>
                </table>
            </Container>
        </div>
    );
}