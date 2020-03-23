import React from 'react'
import { useHistory } from 'react-router-dom'
import { MdSelectAll, MdDoneAll, MdEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { GoTrashcan } from 'react-icons/go'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { Tabela, Container } from '../Table/styles'

export default function TableItem(props) {
    const history = useHistory()
    return (
        <Tabela>
            <tr onClick={() => history.push("/perfil")}>
                <td><img src="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png" /></td>
                <td className="nome">{props.nome}</td>
                <td className="email"><MdEmail />{props.email}</td>
                <td className="telefone"><FiPhone />{props.telefone}</td>
                <td className="cidade"><AiOutlineHome />{props.cidade}</td>
                <td className="icones"><GoTrashcan /> <MdSelectAll /> <MdDoneAll /></td>
            </tr>
        </Tabela>
    )
}
