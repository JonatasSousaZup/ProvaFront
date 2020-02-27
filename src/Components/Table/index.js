import React from 'react';
import { Container } from './styles';
import { MdSelectAll, MdDoneAll, MdEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { GoTrashcan } from 'react-icons/go'
import { AiOutlineHome } from 'react-icons/ai'

export default function Table() {
    return (
        <div>
            <Container>
                <table>
                    <tr>
                        <td><img src="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png" /></td>
                        <td className="nome">Jonatas</td>
                        <td><MdEmail /> jonatas.sousa@zup.com.br</td>
                        <td><FiPhone /> (11)96666-7777</td>
                        <td><AiOutlineHome /> Ferraz de Vasconcelos-SP</td>
                        <td><GoTrashcan /> <MdSelectAll /> <MdDoneAll /></td>
                    </tr>
                    <tr>
                        <td><img src="https://api.adorable.io/avatars/hi_mom" /></td>
                        <td className="nome">Tiago</td>
                        <td><MdEmail /> tiago.lima@zup.com.br</td>
                        <td><FiPhone /> (11)94002-8922</td>
                        <td><AiOutlineHome /> Barueri-SP</td>
                        <td><GoTrashcan /> <MdSelectAll /> <MdDoneAll /></td>
                    </tr>
                    <tr>
                        <td><img src="https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895" /></td>
                        <td className="nome">Bruno</td>
                        <td><MdEmail /> bruno.augusto@zup.com.br</td>
                        <td><FiPhone /> (11)90000-1111</td>
                        <td><AiOutlineHome /> Ferraz de Vasconcelos-SP</td>
                        <td><GoTrashcan /> <MdSelectAll /> <MdDoneAll /></td>
                    </tr>
                    {/* <tr>
                        <th><img src="https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895" /></th>
                        <th>Bruno</th>
                        <th><MdEmail /> bruno.augusto@zup.com.br</th>
                        <th><FiPhone /> (11)90000-1111</th>
                        <th><AiOutlineHome /> Ferraz de Vasconcelos-SP</th>
                        <th><GoTrashcan /> <MdSelectAll /> <MdDoneAll /></th>
                    </tr> */}
                </table>
            </Container>
        </div>
    );
}