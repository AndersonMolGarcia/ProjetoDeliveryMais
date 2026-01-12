import './style.css';
import Navbar from '../../components/navbar';
import Estabelecimento from '../../components/estabelecimento';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Busca(props) {

    const [searchParams] = useSearchParams();
    const [resultado, setResultado] = useState([]);
    const [mais, setMais] = useState(true);
    const [processando, setProcessando] = useState(false);
    const [pagina, setPagina] = useState(1);

    var id_categoria = searchParams.get('id_cat');
    var descricao = searchParams.get('descr') ?? 'Busca';
    var id_banner = searchParams.get('id_banner');
    

    function ListarEstabelecimentos() {

        const codCidade = JSON.parse(localStorage.getItem('sessionCodCidade'));

        setProcessando(true);

        api.get("v1/estabelecimentos", {
            params: {
                cod_cidade: codCidade,
                nome: "",
                id_categoria: id_categoria,
                id_banner: id_banner,
                pagina: pagina
            }
        })
            .then(response => {
                setResultado((oldArray) => [...oldArray, ...response.data]);
                setProcessando(false);
                setPagina(pagina + 1)
                console.log(response.data);
                setMais(response.data.length >= 10);
            })
            .catch(err => {
                setProcessando(false);
                console.log(err);
            })
    }

    useEffect(() => {
        ListarEstabelecimentos();
    }, []);

    return (
        <div className='container-fluid mt-page'>
            <Navbar />

            <div className='row m-2'>
                <h3>{descricao}</h3>
            </div>

            <div className='row m-2'>
                {
                    resultado.map(estabelecimento => {
                        return <Estabelecimento
                            key={estabelecimento.id_estabelecimento}
                            url_imagem={estabelecimento.url_logo}
                            nome={estabelecimento.nome}
                            avaliacao={estabelecimento.avaliacao}
                            categoria={estabelecimento.categoria}
                            id_estabelecimento={estabelecimento.id_estabelecimento}
                        />
                    })
                }
            </div>

            {
                processando ?
                    <div className='text-center m-5'>
                        <span className='spinner-grow spinner-grow-sm text-danger' role='status'></span>
                        <span className='ms-2'>Processando...</span>
                    </div>
                    : null
            }

            {
                !processando && mais ?
                    <div className='row m-4'>
                        <button onClick={ListarEstabelecimentos} className='btn btn-outline-danger'>Ver mais restaurantes</button>
                    </div>
                    : null
            }
        </div>
    );
};


export default Busca;