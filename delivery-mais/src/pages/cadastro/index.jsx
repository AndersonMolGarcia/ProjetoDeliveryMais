
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './style.css';
import Logo from '../../assets/logo-pb.png';
import Fundo from '../../assets/fundo-login.jpg';



function Cadastro(props) {

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senha2, setSenha2] = useState("");
    const [endereco, setEndereco] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [codCidade, setCodCidade] = useState("");
    const [cep, setCep] = useState("");

    const [mensagem, setMensagem] = useState("");
    const [loading, setLoading] = useState(false);  


    function SalvarCidade(e) {
        const [cid, est] = e.target[e.target.selectedIndex].text.split(" - "); // São Paulo - SP

        setCidade(cid);
        setUf(est);
        setCodCidade(e.target.value);
    }
    


        return <div className='row'>

        <div className='col-sm-6 d-flex justify-content-center align-items-center text-center'>

            <form className='form-cadastro mt-5'>
                <h3 className='mb-4'>Crie sua conta e faça seu pedido.</h3>
                <h6 className='mb-3'>Informe os dados abaixo</h6>

                <div className='form-floating'>
                    <input                         
                        type="text" 
                        className='form-control' 
                        id="floatingInput" 
                        placeholder='Nome completo' 
                        value={nome} 
                        onChange={e => setNome(e.target.value)} 
                    />
                    <label for="floatingInput">Nome Completo</label>
                </div>

                <div className='form-floating'>
                    <input 
                        type="email" 
                        className='form-control' 
                        id="floatingInput" 
                        placeholder='E-mail' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <label for="floatingInput">E-mail</label>
                </div>

                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='form-floating'>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="floatingInput" 
                                placeholder='Digite sua senha' 
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                            />
                            <label for="floatingInput">Senha</label>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='form-floating'>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="floatingInput" 
                                placeholder='Confirme a senha' 
                                value={senha2}
                                onChange={e => setSenha2(e.target.value)}
                            />
                            <label for="floatingInput">Confirme a Senha</label>
                        </div>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='form-floating'>
                            <input 
                                type="text" 
                                className='form-control' 
                                placeholder='Endereço' 
                                id="floatingInput" 
                                value={endereco}
                                onChange={e => setEndereco(e.target.value)}
                            />
                            <label for="floatingInput">Endereço</label>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='form-floating'>
                            <input 
                                type="text" 
                                className='form-control' 
                                placeholder='Complemento' 
                                id="floatingInput" 
                                value={complemento}
                                onChange={(e) => setComplemento(e.target.value)}
                            />
                            <label for="floatingInput">Complemento</label>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-7'>
                        <div className='form-floating'>
                            <input 
                                type="text" 
                                className='form-control' 
                                placeholder='Bairro' 
                                id="floatingInput" 
                                value={bairro}
                                onChange={e => setBairro(e.target.value)}
                            />
                            <label for="floatingInput">Bairro</label>
                        </div>
                    </div>

                    <div className='col-lg-5'>
                        <div className='form-control mb-2'>
                            <select onChange={SalvarCidade} name="cidades" id="cidades">
                                <option value="0000000">Cidade</option>
                                <option value="3550308">São Paulo - SP</option>
                                <option value="3509502">Campinas - SP</option>
                                <option value="3506003">Bauru - SP</option>
                                <option value="3506073">Santópolis do Aguapeí - SP</option>
                                <option value="3506023">Santo Antônio do Aracanguá - SP</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='form-floating'>
                    <input type="text" className='form-control' id="floatingInput" placeholder='CEP' />
                    <label for="floatingInput">CEP</label>                    
                </div>

                <button className='btn btn-lg btn-danger w-100 mt-3'>Criar Conta</button>

                <div className='mt-5'>
                    <Link to={"/login"}>Já tenho uma conta. Fazer login!</Link>
                </div>

                <img className='mt-5' src={Logo} alt="Delivery Mais" />

            </form>

        </div>

        <div className='col-sm-6 px-0 d-none d-sm-block'>
            <img className='background-cadastro' src={Fundo} alt="Delivery Mais" />
        </div>

    </div>
};



export default Cadastro;