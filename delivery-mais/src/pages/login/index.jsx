import './style.css';
import Logo from '../../assets/logo-pb.png';
import Fundo from '../../assets/fundo-login.jpg';
import { Link } from 'react-router-dom';
import SaltPassword from '../../services/md5.js';
import { useState } from 'react';
import api from '../../services/api.js';

function Login(props) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [sucesso, setSucesso] = useState("");
    const [mensagem, setMensagem] = useState("");

    function ProcessaLogin(e) {

        e.preventDefault();

        setSucesso("");
        setMensagem("");

        api.post('v1/usuarios/login', {
            email: email,
            senha: SaltPassword(senha)
        })
            .then(response => {
                setSucesso('S');
            })
            .catch(err => {
                console.log(err);
                setSucesso('N');
                setMensagem('E-mail ou senha inválida!');
            })


    }


    return <div className='row'>

        <div className='col-sm-6 d-flex justify-content-center align-items-center text-center'>

            <form className='form-login mt-5'>

                <h3 className='mb-4'>Peça seu delivery agora mesmo.</h3>
                <h6 className='mb-3'>Acesse sua conta</h6>

                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="floatingInput">E-mail</label>

                </div>

                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <label htmlFor="floatingPassword">Senha</label>

                </div>



                <button onClick={ProcessaLogin} className='btn btn-lg btn-danger w-100 mt-3'>Acessar</button>



                {
                    sucesso === 'N' ?
                        <div className="alert alert-danger mt-2" role="alert">
                            {mensagem}
                        </div>
                        : null
                }





                <div className='mt-5'>
                    <Link to={"/cadastro"}>Não tenho uma conta. Criar agora!</Link>
                </div>

                <img className='mt-5' src={Logo} alt="Delivery Mais" />

            </form>

        </div>

        <div className='col-sm-6 px-0 d-none d-sm-block'>
            <img className='background-login' src={Fundo} alt="Delivery Mais" />
        </div>

    </div>
};


export default Login;