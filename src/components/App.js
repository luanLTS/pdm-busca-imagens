import React, { Component } from 'react';

import { Card } from 'primereact/card';
import Busca from './Busca';

import env from 'react-dotenv';
import { createClient } from 'pexels';
import ListaImagens from './ListaImagens';
import PexelsCopyrigth from './PexelsCopyrigth';

export class App extends Component {
  state = {
    photos: [],
  };

  pexelsClient = null;

  componentDidMount() {
    this.pexelsClient = createClient(env.PEXELS_KEY);
  }

  onBuscaRealizada = (termo) => {
    console.log(termo);
    this.pexelsClient.photos
      .search({ query: termo })
      .then((result) => this.setState({ photos: result.photos }));
  };

  render() {
    return (
      <div className='grid justify-content-center m-auto w-9 border-round border-1 border-purple-300'>
        <div className='col-12'></div>
        <div className='col-12 md:col-8'>
          <Card>
            <Busca onBuscaRealizada={this.onBuscaRealizada} />
          </Card>
          <div className='col-offset-10 col-2'>
            <PexelsCopyrigth />
          </div>
        </div>
        <div className='col-12 md:col-8 grid justify-content-center'>
          <ListaImagens photos={this.state.photos} />
          {/*this.state.photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.src.small}
              alt={photo.alt}
              className='m-1'
            />
          ))*/}
        </div>
      </div>
    );
  }
}
