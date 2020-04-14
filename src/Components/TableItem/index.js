import React from 'react'
import { useHistory } from 'react-router-dom'
import { MdSelectAll, MdDoneAll } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { FaRegTrashAlt } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { AiOutlineHome } from 'react-icons/ai'
import { Td, Tr, Img } from './styles'

export default function TableItem(props) {
    const history = useHistory()
    return (
        <Tr onClick={() => history.push("/perfil")}>
            <Td><Img src={props.imagem} /></Td>
            <Td className="nome"> {props.nome}</Td>
            <Td className="email"><GoMail /> {props.email}</Td>
            <Td className="telefone"><FiPhone /> {props.telefone}</Td>
            <Td className="cidade"><AiOutlineHome /> {props.cidade}</Td>
            <Td className="icones"> <FaRegTrashAlt /> <MdSelectAll /> <MdDoneAll /> </Td>
        </Tr>
    )
}
