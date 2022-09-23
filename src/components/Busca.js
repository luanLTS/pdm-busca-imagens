import React, { Component } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default class Busca extends Component {
  state = {
    termoBusca: '',
  };

  onTermoAlterado = (event) => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div className='flex flex-column'>
        <span className='p-input-icon-left w-full p-float-label'>
          <i className='pi pi-search'></i>
          <InputText
            className='w-full'
            placeholder={this.props.dica}
            onChange={this.onTermoAlterado}
          />
          <label>{this.props.rotulo}</label>
        </span>
        <Button label='Buscar' className='p-button-rounded mt-2' />
      </div>
    );
  }
}

Busca.defaultProps = {
  dica: 'Digite algo...',
  rotulo: 'Busca',
};
