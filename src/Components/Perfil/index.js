import React, { useState } from 'react';
import { Container, Header, Section, Img, Linha, IconsContainer } from './styles';
import { FaChevronCircleLeft, FaRegUser } from 'react-icons/fa';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { GoMail, GoCalendar } from 'react-icons/go';
import { TiKeyOutline } from 'react-icons/ti';

export default function Perfil() {
    const [content, setContent] = useState({});
    return (
        <Container>
            <Header>
                <Linha to="/"> <FaChevronCircleLeft className="leftIcon" /></Linha>
            </Header>

            <Section>
                <div>
                <Img src="https://miro.medium.com/max/570/1*EelUYA6BOTNXtuRjSlaqHw.png" />
                </div>
                <div>
                 <span> {content.label}</span>
                 <span>{content.value}</span>
                </div>
                <IconsContainer>
                <FaRegUser className="Icons" onMouseEnter={ () => setContent({ label:"Hi, myname is", value:"Tiago" })} />
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