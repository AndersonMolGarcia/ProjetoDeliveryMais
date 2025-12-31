import './style.css';
import Endereco from "../../components/endereco/lista/index.jsx";
import Navbar from '../../components/navbar/index.jsx';



function Enderecos(props) {

    return (
        
        <div className='container-fluid mt-page '>
            <Navbar />

            <div className='row col-lg-6 offset-lg-3'>

                <div className='col-12 mt-4 d-flex justify-content-between'>
                     <h2 className='mt-2'>Meus Endereços</h2>
                     <button className='btn btn-sm btn-outline-danger'>Adicionar Endereço</button>
                </div>

                <div className='row mt-5'>
                    {
                        [1,2,3,4,5].map(endereco => {
                            return <Endereco key={endereco} />
                        })
                    }
                </div>

            </div>
           
        </div>
    );
};



export default Enderecos;