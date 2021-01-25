import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/pokemon-logo.svg';
import Feed from '../../components/Feed';

import { Container } from './styles';

const Home: React.FC = () => {

  return (  
    <Container>
      <Link to="/"><img src={Logo} alt="Pokémon" /></Link>
      <Feed />
    </Container>
  )
}

export default Home;