import React from 'react';
import { Container, Head, Img, Input } from './styles';
import { FaUserCircle, FaSearch } from 'react-icons/fa'

export default function Header() {
    return (
        <Container>
            <Head>
                <Img src="https://uploads-ssl.webflow.com/5cac6236f8d44ddee118d97c/5e666d594f66c9c1e9c3ce74_LogoRGB2.png" />
                <Input placeholder="Buscar" />
                <FaSearch className="searchIcon" />
                <FaUserCircle className="userIcon" />
            </Head>
        </Container>
    );
}