import { useEffect, useState } from 'react';
import './style.css';
import Estabelecimento from '../../components/estabelecimento';
import Navbar from '../../components/navbar';
import api from '../../services/api.js';




function Favoritos(props) {


    const [favoritos, setFavoritos] = useState([]);

    function ListarFavoritos() {
        api.get('v1/estabelecimentos/favoritos')
            .then(response => setFavoritos(response.data))
            .catch(err => console.error(err))
    };

    function DeleteFavorito(id_favorito) {
        api.delete(`/v1/estabelecimentos/favoritos/${id_favorito}`)
            .then(response => ListarFavoritos())
            .catch(err => console.error(err))
    }

    useEffect(() => {
        ListarFavoritos();
    }, []);



    return (

        <div className='container-fluid mt-page'>
            <Navbar />

            <div className='row col-lg-8 offset-2'>

                <div className='row m-2'>
                    <h3>Meus Favoritos</h3>
                </div>

                <div className='row m-2'>
                    {
                        favoritos.map(estabelecimento => {
                            return <Estabelecimento
                                key={estabelecimento.id_estabelecimento}
                                url_imagem={estabelecimento.url_logo}
                                nome={estabelecimento.nome}
                                avaliacao={estabelecimento.avaliacao}
                                categoria={estabelecimento.categoria}
                                id_estabelecimento={estabelecimento.id_estabelecimento}
                                id_favorito={estabelecimento.id_favorito}
                                btnRemoverFavorito={true}
                                onClickRemoverFavorito={DeleteFavorito}
                            />
                        })
                    }
                </div>
            </div>

        </div>

    );
};



export default Favoritos;