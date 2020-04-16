import React, { useState } from 'react';
import { Container, Section, Img, Linha, IconsContainer } from './styles';
import { FaChevronCircleLeft, FaRegUser } from 'react-icons/fa';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { GoMail, GoCalendar } from 'react-icons/go';
import { TiKeyOutline } from 'react-icons/ti';

export default function Perfil() {
    const [content, setContent] = useState({});
    return (
        <Container>
            <Linha to="/"> <FaChevronCircleLeft className="leftIcon" /></Linha>

            <Section>
                <div>
                    <Img src="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png" />
                </div>
                <div>
                    <span> {content.label}</span>
                    <h1>{content.value}</h1>
                </div>
                <IconsContainer>
                    <FaRegUser className="Icons" onMouseEnter={() => setContent({ label: "Hi, myname is", value: "Tiago" })} />
                    <GoMail className="Icons" />
                    <GoCalendar className="Icons" />
                    <FiMapPin className="Icons" />
                    <FiPhone className="Icons" />
                    <TiKeyOutline className="Icons" />
                </IconsContainer>
            </Section>
        </Container>
    );
}