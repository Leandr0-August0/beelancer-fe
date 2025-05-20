export const axiosConfig = {
    headers: {
        authorization: `Bearer ${
            typeof window !== "undefined" 
            && sessionStorage.getItem("authToken")
                ? JSON.parse(sessionStorage.getItem("authToken")).token
                : null
        }`,
    },
};

export const verifyToken = (returnToken) => {
    const token = sessionStorage.getItem("authToken");

    if (!token) return null;

    const { expiresIn } = JSON.parse(token);

    if (Date.now() > expiresIn) {
        sessionStorage.removeItem("authToken");
        alert("Seu token expirou, faça login novamente");
        return null;
    }

    return token;
};

export const authService = (router, ok) => {
    const token = verifyToken();

    if (!token) {
        router.push("/login");
        return alert("Você precisa estar logado para acessar essa página");
    }

    ok();
};

export const logout = (router) => {
    {
        typeof window !== "undefined" && sessionStorage.removeItem("authToken");
    }

    router.push("/");
};

export const login = (router) => {
    router.push("/login");
};
