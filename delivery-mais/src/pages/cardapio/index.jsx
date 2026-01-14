import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './style.css';
import Navbar from '../../components/navbar';
import Star from "../../assets/star.png";
import Produto from '../../components/produto/lista';
import Footer from '../../components/footer';
import api from '../../services/api';




function Cardapio(props) {

    
    const {id} = useParams();
    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [avaliacao, setAvaliacao] = useState(0);
    const [urlFoto, seturlFoto] = useState("");
    const [entrega, setEntrega] = useState("");
    const [minimo, setMinimo] = useState("");
    const [qtd, setQtd] = useState("");

    const [categorias, setCategorias] = useState([]);
    const [produtos, setProdutos] = useState([]);

    function ListarEstabelecimentos() {
        api.get(`v1/estabelecimentos/${id}`)
            .then(response => {
                setNome(response.data[0].nome)                
                setEndereco(response.data[0].endereco)
                setComplemento(response.data[0].complemento)
                setBairro(response.data[0].bairro)
                setCidade(response.data[0].cidade)
                setUf(response.data[0].uf)
                setAvaliacao(response.data[0].avaliacao)    
                seturlFoto(response.data[0].url_foto)            
                setEntrega(response.data[0].vl_taxa_entrega)
                setMinimo(response.data[0].vl_min_pedido)
                setQtd(response.data[0].qtd_avaliacao)
            })
            .catch(err => {
                console.error(err);
            })
    }

    function ListarProdutos() {
        api.get(`v1/cardapios/${id}`)
            .then(response => {
                let categoriasUnica = response.data.map(item => item.categoria) 
                
                categoriasUnica = categoriasUnica.filter((itemArray, i, arrayCompleto) => {
                    return arrayCompleto.indexOf(itemArray) === i;
                })

                setCategorias(categoriasUnica);
                setProdutos(response.data);
            })
            .catch(err => {
                console.error(err);
            })
    }
    


    useEffect(() => {
        ListarEstabelecimentos();
        ListarProdutos();
    }, []);



    return (

        <div className='container-fluid mt-page cardapio'>
            <Navbar />

            <div className='row col-lg-8 offset-lg-2'>

                <div className='col-12'>
                    <img className='img-fluid rounded img_estabelecimento_cardapio' src={urlFoto} alt="Estabelecimento" />
                </div>

                <div className='col-12 mt-4'>
                    <h2>{nome}</h2>
                    <span className='d-block'>{endereco} {complemento.length > 0 ? ' - ' + complemento : null} - {bairro} - {cidade} - {uf}</span>
                    <div className='classificacao'>
                        <img src={Star} alt="Avaliação" />
                        <span className='ms-1'> {avaliacao}</span>
                        <span className='ms-4'>
                            {
                                qtd <=1 ? `${qtd} avaliação` : `${qtd} avaliações`
                            }
                        </span>
                           
                        
                    </div>

                    <div className='classificao mt-3'>
                        <span className=''>
                            <b className='me-2'>Taxa de Entrega: </b>
                            {
                                new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(entrega)
                            }
                        </span>
                        <span className='ms-5'>
                            <b className='me-2'>Pedido mínimo: </b>
                            {
                                new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(minimo)
                            }
                        </span>
                    </div>

                </div>

                {
                    categorias.map(categoria => {

                        return (
                            <div key={categoria} className='row mt-5'>

                                <div className='mb-3'>
                                    <h5>{categoria}</h5>
                                </div>

                                {
                                    produtos.map(produto => {

                                        return produto.categoria === categoria ? <Produto key={produto}
                                            nome={produto.nome}
                                            descricao={produto.descricao}
                                            vl_produto={produto.vl_produto}
                                            vl_promocao={produto.vl_promocao}
                                            url_foto={produto.url_foto}
                                        />
                                        : null
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div>

            <Footer />



        </div>

    );
};



export default Cardapio;