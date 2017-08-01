import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const vehicles = [
  {
    combustivel: 'Flex',
    imagem: null,
    marca: 'Volkswagem',
    modelo: 'Gol',
    placa: 'FFF-5498',
    valor: 20000,
    id: 1,
  },
  {
    combustivel: 'Gasolina',
    imagem: null,
    marca: 'Volkswagem',
    modelo: 'Fox',
    placa: 'FOX-4125',
    valor: 20000,
    id: 2,
  },
  {
    combustivel: 'Alcool',
    imagem: 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg',
    marca: 'Volkswagen',
    modelo: 'Fusca',
    placa: 'PAI-4121',
    valor: 20000,
    id: 3,
  },
];

const getVehicleImage = (img) => {
  if (!img) {
    return (
      <span>Sem foto</span>
    );
  }

  return (
    <a href={img} className='image-link' target='_blank'>Imagem</a>
  );
};

const Vehicles = () => (
  <div className='container'>
    <div className='actions'>
      <Link to='/new' className='button is-success'>Novo Carro</Link>
      <div className='field has-addons'>
        <div className='control'>
          <input className='input' type='text' placeholder='Pesquisar' />
        </div>
        <div className='control'>
          <a className='button'>
            <svg style={{ width: 22, height: 22 }} viewBox='0 0 24 24'>
              <path d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59
                14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41
                11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12
                7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className='list'>
      <table className='table'>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Foto</th>
            <th>Combustível</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {
            vehicles.map(vehicle => (
              <Link key={vehicle.id} to={`/${vehicle.id}`} className='edit-link'>
                <td>{ vehicle.placa }</td>
                <td>{ vehicle.modelo }</td>
                <td>{ vehicle.marca }</td>
                <td>{ getVehicleImage(vehicle.imagem) }</td>
                <td>{ vehicle.combustivel }</td>
                <td>{ vehicle.valor }</td>
              </Link>
            ))
          }
        </tbody>
      </table>
    </div>
  </div>
);

export default Vehicles;
