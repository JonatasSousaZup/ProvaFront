import React from 'react';

import { Container } from './styles';

export default function Table() {
    return (
        <div>
            <Container>
                <table>
                    <tr>
                        <td>Ana</td>
                        <td>ana@ana</td>
                        <td>SãoPaulo-SP</td>
                    </tr>
                    <tr>
                        <td>Jhool</td>
                        <td>jhool@jhool</td>
                        <td>Narnia-NAR</td>
                    </tr>
                    <tr>
                        <td>Tiago</td>
                        <td>tiago@tiago</td>
                        <td>Atlantida-ATL</td>
                    </tr>
                </table>
            </Container>
        </div>
    );
}