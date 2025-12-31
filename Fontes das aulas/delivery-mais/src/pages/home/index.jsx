import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Estabelecimento from "../../components/estabelecimento";

function Home(){
    return <>
        <Navbar />

        <Estabelecimento nome="Burger King" avaliacao="4.0" categoria="Lanches"
              url_imagem="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201801231937__HABIB_VERDE.jpg" />
        <Estabelecimento nome="McDonald's" avaliacao="4.2" categoria="Lanches"
               url_imagem="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201801231937__HABIB_VERDE.jpg"/>
        <Estabelecimento nome="Habibs" avaliacao="3.8" categoria="Salgados" 
               url_imagem="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201801231937__HABIB_VERDE.jpg"/>

        <Footer />
    </>
}

export default Home;