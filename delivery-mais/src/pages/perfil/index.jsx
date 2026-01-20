import './style.css';
import Navbar from '../../components/navbar';
import { useEffect, useState } from 'react';
import api from '../../services/api.js';


function Perfil(props) {


    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState(false);

    const id_usuario = localStorage.getItem('sessionId');

    function ExibeMsg(msg) {
        setMensagem(msg);
        setTimeout(() => setMensagem(''), 3000);
    }

    function SalvarDados() {
        api.patch(`/v1/usuarios/${id_usuario}`, {
            nome: nome,
            email: email
        })
            .then(response => {
                ListarDados();
                ExibeMsg("Usuário alterado com sucesso!");
                setErro(false);
            })
            .catch(err => {
                ExibeMsg(err.response.data.erro);
                setErro(true);
                console.error('Erro ao alterar usuário: ' + err.response.data.erro);
            })

    };

    function ListarDados() {
        api.get(`/v1/usuarios/${id_usuario}`)
            .then(response => {
                setNome(response.data[0].nome)
                setEmail(response.data[0].email)
                //console.log(response.data)
            })
            .catch(err => console.error(err));
    }


    useEffect(() => {
        ListarDados();
    }, []);



    return (

        <div className='container-fluid mt-page'>

            <Navbar />

            <div className='row col-lg-6 offset-lg-3'>
                <div className='row m-2'>
                    <h3>Meu Perfil</h3>
                </div>

                <div className='row col-12 m-2'>
                    <form>
                        <div className='mb-3'>
                            <label htmlFor="InputNome" className='form-label'>Nome</label>
                            <input
                                type="text"
                                className='form-control'
                                id="InputNome"
                                aria-describedby='nome'
                                onChange={(e) => setNome(e.target.value)}
                                value={nome}
                            />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="InputEmail" className='form-label'>E-mail</label>
                            <input
                                type="email"
                                className='form-control'
                                id="InputEmail"
                                aria-describedby='nome'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>

                        {
                            mensagem.length > 0 && !erro ?
                                <div className="alert alert-success text-center mt-4" role="alert">
                                    {mensagem}
                                </div>
                                : null
                        }

                         {
                            mensagem.length > 0 && erro ?
                                <div className="alert alert-danger text-center mt-4" role="alert">
                                    {mensagem}
                                </div>
                                : null
                        }

                        <div className='d-flex justify-content-end'>
                            <button onClick={SalvarDados} type='button' className='btn btn-lg btn-danger mt-3'>Salvar Dados</button>
                        </div>


                    </form>
                </div>
            </div>

        </div>

    );
};



export default Perfil;