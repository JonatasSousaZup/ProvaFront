import React, { useState } from 'react';
import { Container, Section, Img, Linha, IconsContainer, Info, H1, Span } from './styles';
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

                <Info>
                    <Span> {content.label}</Span>
                    <H1>{content.value}</H1>
                </Info>

                <IconsContainer>
                    <FaRegUser className="Icons" onMouseEnter={() => setContent({ label: "Olá, meu nome é ", value: "Tiago" })} />
                    <GoMail className="Icons" onMouseEnter={() => setContent({ label: "Meu endereço de email é ", value: "tiago.souza@zup.com.br" })} />
                    <GoCalendar className="Icons" onMouseEnter={() => setContent({ label: "Meu aniversário é ", value: "30 de Outubro" })}/>
                    <FiMapPin className="Icons" onMouseEnter={() => setContent({ label: "Meu endereço é ", value: "São Paulo-SP" })}/>
                    <FiPhone className="Icons" onMouseEnter={() => setContent({ label: "Meu número de telefone é ", value: "(11) 94155-1462" })}/>
                    <TiKeyOutline className="Icons" onMouseEnter={() => setContent({ label: "Minha senha é ", value: "4002" })}/>
                </IconsContainer>
            </Section>
        </Container>
    );
}