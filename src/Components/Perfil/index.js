import React from 'react';
import { Container, Header, Section } from './styles';
import { FaChevronCircleLeft } from 'react-icons/fa';

export default function Perfil() {
    return (
        <Container>
            <Header>
                <FaChevronCircleLeft className="leftIcon" />
            </Header>

            <Section>
                {/* <img src="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png"/> */}
            </Section>
        </Container>
    );
}