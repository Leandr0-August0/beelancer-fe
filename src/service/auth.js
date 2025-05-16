import axios from 'axios';

export const authService = (router, ok) => {
    const token = localStorage.getItem('token');
    // if (!token) {
    //     router.push('/login');
    //     return
    // } 
    ok();
};
