import React, { Component } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

// single source of truth
export default class Busca extends Component {
  state = {
    termoBusca: '',
  };

  onTermoAlterado = (event) => {
    console.log(event.target.value);
    // transforma o input em um input controlado
    this.setState({ termoBusca: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onBuscaRealizada(this.state.termoBusca);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='flex flex-column'>
          <span className='p-input-icon-left w-full p-float-label'>
            <i className='pi pi-search'></i>
            <InputText
              className='w-full'
              placeholder={this.props.dica}
              onChange={this.onTermoAlterado}
              // transforma o input em um input controlado
              value={this.state.termoBusca}
            />
            <label>{this.props.rotulo}</label>
          </span>
          <Button label='Buscar' className='p-button-rounded mt-2' />
        </div>
      </form>
    );
  }
}

Busca.defaultProps = {
  dica: 'Digite algo...',
  rotulo: 'Busca',
};
