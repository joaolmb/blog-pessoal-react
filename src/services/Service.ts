import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blogpessoaljoaol.herokuapp.com'
})

export const cadastroUsuario = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

// como se fosse um /usuarios/logar
export const login = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}