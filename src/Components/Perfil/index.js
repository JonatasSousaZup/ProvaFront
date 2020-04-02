import React from 'react';
import { Container, Header, Section, Button, Img } from './styles';
import { FaChevronCircleLeft } from 'react-icons/fa';

export default function Perfil() {
    return (
        <Container>
            <Header>
                <Button>
                    <FaChevronCircleLeft className="leftIcon" />
                </Button>
            </Header>

            <Section>
                <Img src="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png" />
            </Section>
        </Container>
    );
}