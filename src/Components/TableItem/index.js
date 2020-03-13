import React from 'react'
import { useHistory } from 'react-router-dom'


export default function TableItem(props) {
    const history = useHistory()
    return (
        <tr onClick={ () => history.push("/perfil")}>
            <td><img src="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png" /></td>
            <td className="nome">{props.nome}</td>
            <td className="email"><MdEmail />{props.email}</td>
            <td className="telefone"><FiPhone />{props.telefone}</td>
            <td className="cidade"><AiOutlineHome />{props.cidade}</td>
            <td className="icones"><GoTrashcan /> <MdSelectAll /> <MdDoneAll /></td>
        </tr>
    )
}
