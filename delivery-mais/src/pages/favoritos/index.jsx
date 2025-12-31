import './style.css';
import Estabelecimento from '../../components/estabelecimento';
import Navbar from '../../components/navbar';


function Favoritos(props) {

    return (

        <div className='container-fluid mt-page'>
            <Navbar />

            <div className='row col-lg-8 offset-2'>
                
                <div className='row m-2'>
                    <h3>Meus Favoritos</h3>
                </div>

                <div className='row m-2'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(estabelecimento => {
                            return <Estabelecimento
                                key={estabelecimento}
                                url_imagem="https://static-images.ifood.com.br/image/upload/t_high/logosgde/201804191757_2b988c51-d3c3-4a8d-b39d-2f35153a6a0c.jpg"
                                nome="MacDonald's"
                                avaliacao="4.5"
                                categoria="Lanches"
                                btnRemoverFavorito={true}
                            />
                        })
                    }
                </div>
            </div>

        </div>

    );
};



export default Favoritos;