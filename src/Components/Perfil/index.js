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
                <FaRegUser className="Icons" />
                <GoMail className="Icons" />
                <GoCalendar className="Icons" />
                <FiMapPin className="Icons" />
                <FiPhone className="Icons" />
                <TiKeyOutline className="Icons" />
            </Section>
        </Container>
    );
}