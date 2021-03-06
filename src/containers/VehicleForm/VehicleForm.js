import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CurrencyInput from 'react-currency-input';
import { getVehicle, clearEdition, save } from '../../actions/vehicle';
import './style.css';

class VehicleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        combustivel: 'Alcool',
      },
    };

    if (props.match.params && props.match.params.vehicleId !== 'new') {
      props.getVehicle(props.match.params.vehicleId);
    }
  }

  componentWillReceiveProps(props) {
    if (props.vehicle && !this.state.form.id) {
      this.setState({
        form: props.vehicle,
      });
    }
  }

  componentWillUnmount() {
    this.props.clearEdition();
  }

  handleChange(input, value) {
    this.setState({
      form: {
        ...this.state.form,
        [input]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.save(this.state.form);
    this.props.history.push('/');
  }

  changeValor(event, maskedValue) {
    event.preventDefault();

    this.setState({
      form: {
        ...this.state.form,
        valor: maskedValue,
      },
    });
  }

  placaMask(value) {
    this.handleChange('placa', value.toUpperCase().replace(/^([a-zA-Z]{3})(\d{4})$/, '$1-$2'));
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} className='container columns vehicle__form'>
        <div className='field column is-4'>
          <label htmlFor='placa' className='label'>Placa</label>
          <div className='control'>
            <input
              name='placa'
              className='input'
              type='text'
              placeholder='AAA-9999'
              value={this.state.form.placa}
              required
              onChange={(event) => this.placaMask(event.target.value)}
            />
          </div>
        </div>
        <div className='field column is-4'>
          <label htmlFor='modelo' className='label'>Modelo</label>
          <div className='control'>
            <input
              name='modelo'
              className='input'
              type='text'
              placeholder=''
              required
              value={this.state.form.modelo}
              onChange={(event) => this.handleChange('modelo', event.target.value)}
            />
          </div>
        </div>
        <div className='field column is-4'>
          <label htmlFor='marca' className='label'>Marca</label>
          <div className='control'>
            <input
              name='marca'
              className='input'
              type='text'
              placeholder=''
              value={this.state.form.marca}
              onChange={(event) => this.handleChange('marca', event.target.value)}
              required
            />
          </div>
        </div>
        <div className='field column is-6'>
          <label htmlFor='imagem' className='label'>Foto</label>
          <div className='control'>
            <input
              name='imagem'
              className='input'
              type='text'
              placeholder='http://...'
              value={this.state.form.imagem}
              onChange={(event) => this.handleChange('imagem', event.target.value)}
            />
          </div>
        </div>
        <div className='field column is-2'>
          <label htmlFor='combustivel' className='label'>Combustível</label>
          <div className='control'>
            <div className='select'>
              <select
                name='combustivel'
                value={this.state.form.combustivel}
                onChange={(event) => this.handleChange('combustivel', event.target.value)}
              >
                <option value='Alcool'>Alcool</option>
                <option value='Gasolina'>Gasolina</option>
                <option value='Flex'>Flex</option>
              </select>
            </div>
          </div>
        </div>
        <div className='field column is-4'>
          <label htmlFor='valor' className='label'>Valor</label>
          <div className='control'>
            <CurrencyInput
              name='valor'
              className='input'
              type='text'
              value={this.state.form.valor}
              decimalSeparator=','
              thousandSeparator='.'
              onChangeEvent={(event, masked) => this.changeValor(event, masked)}
            />
          </div>
        </div>
        <div className='column is-12 actions'>
          <Link to='/' className='button'>Cancelar</Link>
          <button type='submit' className='button is-success'>Salvar</button>
        </div>
      </form>
    );
  }
}

const mapStateProps = ({ vehicle }) => ({
  vehicle: vehicle.vehicle,
});

export default connect(mapStateProps, {
  getVehicle,
  clearEdition,
  save,
})(VehicleForm);
