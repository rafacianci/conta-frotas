import {
  GET_VEHICLE,
  CLEAR_EDITION,
  SAVE_VEHICLE,
  SEARCH_VEHICLE,
} from '../actions/types';

const initialState = {
  vehicles: [
    {
      combustivel: 'Flex',
      imagem: '',
      marca: 'Volkswagem',
      modelo: 'Gol',
      placa: 'FFF-5498',
      valor: '20.000,00',
      id: 1,
    },
    {
      combustivel: 'Gasolina',
      imagem: '',
      marca: 'Volkswagem',
      modelo: 'Fox',
      placa: 'FOX-4125',
      valor: '20.000,00',
      id: 2,
    },
    {
      combustivel: 'Alcool',
      imagem: 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg',
      marca: 'Volkswagen',
      modelo: 'Fusca',
      placa: 'PAI-4121',
      valor: '20.000,00',
      id: 3,
    },
  ],
};

export default (state = initialState, action) => {
  if (action.type === SEARCH_VEHICLE) {
    return {
      ...state,
      results: state.vehicles.filter((vehicle) => (
        vehicle.combustivel.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0 ||
        vehicle.marca.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0
      )),
    };
  }

  if (action.type === GET_VEHICLE) {
    return {
      ...state,
      vehicle: state.vehicles.find((vehicle) => vehicle.id === parseInt(action.payload, 0)),
    };
  }

  if (action.type === CLEAR_EDITION) {
    return {
      ...state,
      vehicle: null,
    };
  }

  if (action.type === SAVE_VEHICLE) {
    if (action.payload.id) {
      const updateIndex = state.vehicles.findIndex((vehicle) => vehicle.id === action.payload.id);
      const vehicles = state.vehicles;
      vehicles[updateIndex] = action.payload;

      return {
        ...state,
        vehicle: null,
        vehicles,
      };
    }

    return {
      ...state,
      vehicle: null,
      vehicles: [
        ...state.vehicles,
        {
          ...action.payload,
          id: state.vehicles.length + 1,
        },
      ],
    };
  }

  return state;
};
