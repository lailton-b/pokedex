import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import PokemonLoading from '../../assets/pokemon-loading.svg';

import { Container, Card, Pagination, Wrapper, Page, Loading } from './styles';

interface IData {
  name: string, 
  type: string,
  picture: string
}

const Feed: React.FC = () => {
  const [data, setData] = React.useState<IData[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const { slug } : { slug: string } = useParams();
  
  const next = React.useMemo(() => {
    return slug === undefined ? 2 : Number(slug) + 1;
  }, [slug]);

  const previous = React.useMemo(() => {
    return slug === undefined || slug === '1' ? undefined : Number(slug) - 1;
  }, [slug]);
  
  /* Pokemons fetch */
  React.useEffect(() => {
    const fetchPoke = async () => {
      setLoading(true);

      let finalData: IData[] = [];
      let i = slug === undefined || slug === '1' ? 1 : Number(slug) * 10;
      let numberOfPokemons = i + 9;

      if (!isNaN(i) && i < 890) {
        for (i; i <= numberOfPokemons; i++) {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i);
          const json = await response.json();
          finalData.push({ 
            name: json.name, 
            type: json.types[0].type.name, 
            picture: json.sprites.other["official-artwork"].front_default 
          });
        }

        setData(finalData);
        setLoading(false);
      }
    } 

    fetchPoke();
  }, [slug]);

  if (loading) return(
    <Loading>
      <img src={PokemonLoading} alt="Loading" />
    </Loading>
  )
  if (data !== null) {
    return (
      <Container>
        <Wrapper>
          { data.map((pokemon) => (
            <Card key={pokemon.name} className={pokemon.type}>
              <img src={pokemon.picture} alt={pokemon.name} />
              <div>
                <strong>{pokemon.name}</strong>
                <span>Type: {pokemon.type}</span>
              </div>
            </Card>
          )) }
        </Wrapper>

        <Pagination>
          { previous !== undefined && (
            <Link to={`/page/${previous}`} className="pagination_link prev">
              <ArrowLeft />
              Prev
            </Link>
          )}

          <Page>
            { /\d+/g.test(slug) && Number(slug) < 10 && '0' }
            { /\d+/g.test(slug) && Number(slug) < 100 && '0' }
            { slug === undefined && '001' }
            { /\d+/g.test(slug) && slug }
          </Page>

          { Number(slug) < 88 && (
            <Link to={`/page/${next}`} className="pagination_link next">
              Next
              <ArrowRight />
            </Link>
          )}

          { slug === undefined && (
            <Link to={`/page/${next}`} className="pagination_link next">
              Next
              <ArrowRight />
            </Link>
          )}
        </Pagination>
      </Container>
    )
  } else return (
    <Container>
      <Page>
        There is no more pokemon here ):
        <Pagination>
        <Link to='/' className="pagination_link">
          <ArrowLeft />
        </Link> 
        </Pagination>
      </Page>
    </Container>
  );
}

export default Feed;