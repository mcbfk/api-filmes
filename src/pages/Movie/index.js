import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { APIKey } from "../../config/key"
import { Container } from "./styles"

function Movie() {
    const { id } = useParams()

    const [movie, setMovie] = useState({})
    const image_path = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => { 

                const { title, poster_path, overview, release_date } = data

                const movie = {
                    id, 
                    title, 
                    sinopse: overview, 
                    image: `${image_path}${poster_path}`,
                    releaseDate: release_date
                }

                setMovie(movie)
            })
    }, [id])

    useEffect(() => {
        // Função para adicionar o código JavaScript ao documento
        function addEmbedderPlugin() {
            var type = "serie";
            var imdb = movie.id; // Usando o movie.id como valor para o imdb
            var season = "1";
            var episode = "1";
            var ref = document.referrer;
    
            // Verifica se o embed já foi adicionado antes de chamar a função embedderPlugin
            var frame = document.getElementById('EmbedderIframe');
            if (frame.innerHTML === '') {
                embedderPlugin(type, imdb, season, episode);
            }
    
            function embedderPlugin(type, imdb, season, episode) {
                if (type === "filme") {
                    season = "";
                    episode = "";
                } else {
                    if (season !== "") {
                        season = "/" + season;
                    }
                    if (episode !== "") {
                        episode = "/" + episode;
                    }
                }
                frame.innerHTML += '<iframe src="https://embedder.net/e/' + imdb + season + episode + '?ref=' + ref + '" scrolling="no" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>';
            }
        }
    
        if (movie.id) {
            addEmbedderPlugin(); // Chama a função para adicionar o código JavaScript ao carregar o componente
        }
    
    }, [movie.id]) // Passa o movie.id como dependência para que o código seja atualizado quando o movie.id mudar
    
    return (
        <Container>
            <Link to={`/details/${movie.id}`}><button>Voltar</button></Link>
            <div id="EmbedderIframe"></div> {/* Adiciona o elemento <div> onde o iframe será criado */}
        </Container>
    )
}

export default Movie