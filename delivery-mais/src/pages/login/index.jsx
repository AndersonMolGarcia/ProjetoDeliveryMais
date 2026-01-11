import './style.css';
import Logo from '../../assets/logo-pb.png';
import Fundo from '../../assets/fundo-login.jpg';
import { Link, useNavigate } from 'react-router-dom';
import SaltPassword from '../../services/md5.js';
import { useState } from 'react';
import api from '../../services/api.js';

function Login(props) {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [sucesso, setSucesso] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [loading, setLoading] = useState(false);

    function ProcessaLogin(e) {

        e.preventDefault();

        setSucesso("");
        setMensagem("");
        setLoading(true);

        api.post('v1/usuarios/login', {
            email: email,
            senha: SaltPassword(senha)
        })
            .then(response => {
                localStorage.setItem('sessionToken', JSON.stringify(response.data.token));
                localStorage.setItem('sessionId', JSON.stringify(response.data.id_usuario));
                localStorage.setItem('sessionEmail', JSON.stringify(email));
                localStorage.setItem('sessionCodCidade', JSON.stringify(response.data.cod_cidade));
                localStorage.setItem('sessionCidade', JSON.stringify(response.data.cidade));
                localStorage.setItem('sessionUf', JSON.stringify(response.data.uf));
                
                setSucesso('S');
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                setSucesso('N');
                setMensagem('E-mail ou senha inválida!');
                setLoading(false);
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



                <button onClick={ProcessaLogin} className='btn btn-lg btn-danger w-100 mt-3' disabled={loading}>
                    {
                        loading ? 
                            <div>
                                <span className="spinner-border spinner-border-sm text-light mt-0" role="status"></span> 
                                <span className='ms-2'>Enviando...</span>
                            </div>
                            

                        : <span className='ms-2'>Acessar</span>
                    }
                </button>



                {
                    sucesso === 'N' ?
                        <div className="alert alert-danger mt-2" role="alert"> {mensagem} </div> : null
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