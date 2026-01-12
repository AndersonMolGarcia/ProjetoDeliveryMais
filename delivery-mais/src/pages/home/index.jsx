import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Estabelecimento from "../../components/estabelecimento";
import Categoria from '../../components/categoria';
import Banner from '../../components/banner';
import api from '../../services/api';

function Home(){

   
    const [categorias, setCategorias] = useState([]);
    const [banners, setBanners] = useState([]);
    const [grupos, setGrupos] = useState([]);
    const [destaques, setDestaques] = useState([]);

    function ListarCategorias() {
        const codCidade = JSON.parse(localStorage.getItem('sessionCodCidade'));

        if (!codCidade) {
            console.error('Cidade não definida');
            return;
        }

        api.get("v1/categorias?cod_cidade=" + codCidade)        
            .then(response => {
                setCategorias(response.data);
                //console.log(response.data);
                
            })
            .catch(err => {
                console.log(err);
            })
    }

    function ListarBanner() {        
        const codCidade = JSON.parse(localStorage.getItem('sessionCodCidade'));

        if (!codCidade) {
            console.error('Cidade não definida');
            return;
        }

        api.get("v1/banners/?cod_cidade=" + codCidade)
            .then(response => {
                setBanners(response.data);
                //console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    function ListarDestaques() {
        const codCidade = JSON.parse(localStorage.getItem('sessionCodCidade'));

        if (!codCidade) {
            console.error('Cidade não definida');
            return;
        }

        api.get('/v1/destaques?cod_cidade=' + codCidade)
            .then(response => {
                let gruposUnico = response.data.map(grupo => grupo.descricao);
                // nos grupos, pega apenas um unico grupo sem repetir o nome do grupo
                gruposUnico = gruposUnico.filter((itemArray, i, arrayCompleto) => {
                    return arrayCompleto.indexOf(itemArray) === i;
                });
                // nos destaques, pego o array completo...
                setGrupos(gruposUnico);
                setDestaques(response.data);
                console.log(response.data);
                
            })
            .catch(err => {
                console.log(err);
            })


    }

    useEffect(() => {
        ListarCategorias(); 
        ListarBanner();   
        ListarDestaques();
    }, []);

    

    
        
      

    return <>
        <div className="container-fluid mt-page">
            <Navbar />  

            <div className="row justify-content-center text-center">
                {
                    categorias.map(categoria => {
                        return <Categoria 
                                    key={categoria.id_categoria} 
                                    url_imagem={categoria.foto} 
                                    descricao={categoria.categoria}
                                    id_categoria={categoria.id_categoria}
                                />
                    })
                }
            </div>  

            <div className='row justify-content-center text-center mt-5 m-2'>
                {
                    banners.map((banner) => {
                        return <Banner 
                            key={banner.id_banner}
                            id_banner={banner.id_banner} 
                            url_imagem={banner.foto}
                            descricao={banner.descricao}                               
                        />
                    })
                }
            </div> 

            {
               grupos.map(grupo => {
                    return <div key={grupo} className='row mt-5 m-2'> 
                        
                        <h4>{grupo}</h4>

                        {
                            destaques.map(destaque => {
                                return destaque.descricao === grupo ? 
                                    <Estabelecimento 
                                        key={destaque.id_estabelecimento}
                                        url_imagem={destaque.url_logo}
                                        nome={destaque.nome}
                                        avaliacao={destaque.avaliacao}
                                        categoria={destaque.categoria}
                                        id_estabelecimento={destaque.id_estabelecimento}
                                    /> 
                                    : null
                            })
                        }
                    </div>

               })
            }

            <Footer 

            />

        </div>
    </>
}

export default Home;