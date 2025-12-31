import './style.css';
import Navbar from '../../components/navbar';
import Star from "../../assets/star.png";
import Produto from '../../components/produto/lista';
import Footer from '../../components/footer';


function Cardapio(props) {

    return (

        <div className='container-fluid mt-page cardapio'>
            <Navbar />

            <div className='row col-lg-8 offset-lg-2'>

                <div className='col-12'>
                    <img className='img-fluid rounded img_estabelecimento_cardapio' src="https://lh3.googleusercontent.com/pw/AM-JKLXjiiI6CUyPAeY7N1UF5UWAacWk0pA1G-TDOUHAzr4Eq3g7_LwBl7kVOSlixQ425JXLKSkjeF6ord42ebAUE8GFoq7dtmGDXecy6Eolm0WqGgalR9MP3q0-26z3pCVhp0fo70P8v0KqV4pnv0wC1KOi=w310-h155-no?authuser=0" alt="Estabelecimento" />
                </div>

                <div className='col-12 mt-4'>
                    <h2>Black Dog Paulista</h2>
                    <span className='d-block'>R. Coelho Lisboa, 363 - Cidade Mãe do Céu - São Paulo - SP</span>
                    <div className='classificacao'>
                        <img src={Star} alt="Avaliação" />
                        <span className='ms-1'> 4.0</span>
                        <span className='ms-3'>18 avaliações</span>
                    </div>

                    <div className='classificao mt-3'>
                        <span className=''><b>Taxa de Entrega: </b>R$ 5,00</span>
                        <span className='ms-5'><b>Pedido mínimo:</b> R$ 30,00</span>
                    </div>

                </div>

                {
                    [1, 2, 3].map(categoria => {

                        return (
                            <div className='row mt-5'>

                                <div className='mb-3'>
                                    <h5>Destaques</h5>
                                </div>

                                {
                                    [1, 2, 3, 4, 5].map(produto => {

                                        return <Produto />
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