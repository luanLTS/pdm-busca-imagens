import React, { Component } from 'react';

import { Card } from 'primereact/card';
import Busca from './Busca';

import env from 'react-dotenv';

export class App extends Component {
  onBuscaRealizada = (termo) => {
    console.log(termo);
  };

  render() {
    console.log(env.PEXELS_KEY);
    console.log(window.env.PEXELS_KEY);

    return (
      <div className='grid justify-content-center m-auto w-9 border-round border-1 border-purple-300'>
        <div className='col-12'>
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className='col-8'>
          <Card>
            <Busca onBuscaRealizada={this.onBuscaRealizada} />
          </Card>
        </div>
      </div>
    );
  }
}
