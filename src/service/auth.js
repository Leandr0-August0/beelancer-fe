import axios from 'axios';

export const authService = (router, ok) => {
    const token = localStorage.getItem('token');
    if (!token) {
        router.push('/login');
        return alert('Você precisa estar logado para acessar essa página');
    } 
    ok();
};

export const logout = (router) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    router.push('/');
};

export const login = (router) => {
    router.push('/login');
};