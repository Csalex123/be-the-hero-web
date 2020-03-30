import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';

import api from '../services/api';

export default function Register() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };    

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID é ${response.data.id}`);
            history.push('/');
        } catch (error) {
            alert("Erro no cadastro, tente novamente")
        }  

    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadasto, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                            Voltar para o Logon
                        </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome da ONG" />
                    <input value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" placeholder="E-mail" />

                    <input value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="Whatsapp" />

                    <div className="input-group">
                        <input value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Cidade" />
                        <input value={uf}
                            onChange={(e) => setUf(e.target.value)}
                            placeholder="Uf"
                            style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )

} 