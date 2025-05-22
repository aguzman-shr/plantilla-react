import api from "@/infrastructure/axios";
import { ButtonSubmit } from "@/modules/core";
import { useAuth } from "@/modules/core/hooks/use-auth";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await api.post('/login', { username, password });
            const token = res.data.token; // Ajusta según tu respuesta
            login(token);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error login:', error);
        }
    };
    return <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Usuario"
        />
        <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Contraseña"
        />
        <ButtonSubmit loading={false} onClick={() => { }} text="Iniciar sesión" disabled={false} />        </form>
}