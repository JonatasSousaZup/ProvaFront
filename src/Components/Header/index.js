import React from 'react';

import { Container } from './styles';
import { FaUserCircle, FaSearch } from 'react-icons/fa'

export default function Header() {
    return (
        <div>
            <Container>
                    <img src="https://uploads-ssl.webflow.com/5cac6236f8d44ddee118d97c/5cb08cdd17edca8cbfc171a6_zup-neon.png" />
                    <input placeholder="Buscar" />
                    <FaUserCircle className="userIcon" />
            </Container>
        </div>
    );
}