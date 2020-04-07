import React from 'react';
import { Container, Header, Section, Img, Linha } from './styles';

import { FaChevronCircleLeft, FaRegUser } from 'react-icons/fa';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { GoMail, GoCalendar } from 'react-icons/go';
import { TiKeyOutline } from 'react-icons/ti';



export default function Perfil() {
    return (
        <Container>
            <Header>
                 <Linha to="/"> <FaChevronCircleLeft className="leftIcon" /></Linha>
            </Header>

            <Section>
                <Img src="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png" />
                <span className="Icones" >< FaRegUser /></span>
                <span className="Icones">< GoMail /></span>
                <span className="Icones">< GoCalendar /></span>
                <span className="Icones">< FiMapPin /></span>
                <span className="Icones">< FiPhone /></span>
                <span className="Icones">< TiKeyOutline/></span>
            
            </Section>
        </Container>
    );
}