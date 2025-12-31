import './style.css';
import Logo from '../../assets/logo-pb.png';
import Fundo from '../../assets/fundo-login.jpg';
import { Link } from 'react-router-dom';



function Cadastro(props) {

    return <div className='row'>

        <div className='col-sm-6 d-flex justify-content-center align-items-center text-center'>

            <form className='form-cadastro mt-5'>
                <h3 className='mb-4'>Crie sua conta e faça seu pedido.</h3>
                <h6 className='mb-3'>Informe os dados abaixo</h6>

                <div className='form-floating'>
                    <input type="text" className='form-control' id="floatingInput" placeholder='Nome completo' />
                    <label for="floatingInput">Nome Completo</label>
                </div>

                <div className='form-floating'>
                    <input type="email" className='form-control' id="floatingInput" placeholder='E-mail' />
                    <label for="floatingInput">E-mail</label>
                </div>

                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='form-floating'>
                            <input type="password" className="form-control" id="floatingInput" placeholder='Digite sua senha' />
                            <label for="floatingInput">Senha</label>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='form-floating'>
                            <input type="password" className="form-control" id="floatingInput" placeholder='Confirme a senha' />
                            <label for="floatingInput">Confirme a Senha</label>
                        </div>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='form-floating'>
                            <input type="text" className='form-control' placeholder='Endereço' id="floatingInput" />
                            <label for="floatingInput">Endereço</label>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='form-floating'>
                            <input type="text" className='form-control' placeholder='Complemento' id="floatingInput" />
                            <label for="floatingInput">Complemento</label>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-7'>
                        <div className='form-floating'>
                            <input type="text" className='form-control' placeholder='Bairro' id="floatingInput" />
                            <label for="floatingInput">Bairro</label>
                        </div>
                    </div>

                    <div className='col-lg-5'>
                        <div className='form-control mb-2'>
                            <select  name="cidades" id="cidades">
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