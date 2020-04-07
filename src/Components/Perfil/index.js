import React from 'react';
import { Container, Header, Section, Button, Img, Link } from './styles';

import { FaChevronCircleLeft, FaRegUser } from 'react-icons/fa';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { GoMail, GoCalendar } from 'react-icons/go';
import { TiKeyOutline } from 'react-icons/ti';
import { Linha } from '../Menu/styles';



export default function Perfil() {
    return (
        <Container>
            <Header>
                 <Linha to="/"> <FaChevronCircleLeft className="leftIcon" /></Linha>
            </Header>

            <Section>
                <Img src="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png" />
                <span >< FaRegUser /></span>
                <span >< GoMail /></span>
                <span>< GoCalendar /></span>
                <span>< FiMapPin /></span>
                <span>< FiPhone /></span>
                <span>< TiKeyOutline/></span>
            
            </Section>
        </Container>
    );
}