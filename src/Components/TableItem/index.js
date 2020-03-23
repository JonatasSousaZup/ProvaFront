import React from 'react'
import { useHistory } from 'react-router-dom'
import { MdSelectAll, MdDoneAll, MdEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { GoTrashcan } from 'react-icons/go'
import { AiOutlineHome } from 'react-icons/ai'
import { Td, Tr, Img } from './styles'

export default function TableItem(props) {
    const history = useHistory()
    return (
        <Tr onClick={() => history.push("/perfil")}>
            <Td><Img src="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png" /></Td>
            <Td className="nome"> {props.nome}</Td>
            <Td className="email"><MdEmail /> {props.email}</Td>
            <Td className="telefone"><FiPhone /> {props.telefone}</Td>
            <Td className="cidade"><AiOutlineHome /> {props.cidade}</Td>
            <Td className="icones"> <GoTrashcan /> <MdSelectAll /> <MdDoneAll /> </Td>
        </Tr>
    )
}
