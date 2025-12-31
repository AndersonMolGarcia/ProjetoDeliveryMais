import './style.css';
import Navbar from '../../components/navbar';


function Perfil(props) {

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
                            <input type="text" className='form-control' id="InputNome" aria-describedby='nome' />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="InputEmail" className='form-label'>E-mail</label>
                            <input type="email" className='form-control' id="InputEmail" aria-describedby='nome' />
                        </div>

                        <div className='d-flex justify-content-end'>
                            <button type='button' className='btn btn-lg btn-danger mt-3'>Salvar Dados</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
};



export default Perfil;