const totalItensPerPage = 5;

const getStartPage = (totalPages, currentPage) => {
  if ((currentPage - 3) <= 0 || totalPages < 5) {
    return 1;
  }

  if ((currentPage + 2) > totalPages) {
    return totalPages - 4;
  }

  return currentPage - 2;
};

const getLastPage = (totalPages, currentPage) => {
  if (totalPages <= 5 || (currentPage + 3) > totalPages) {
    return totalPages;
  }

  if ((currentPage - 3) <= 0) {
    return 5;
  }

  return currentPage + 2;
};

const getPaginationCollection = (totalPages, currentPage) => {
  let page = getStartPage(totalPages, currentPage);
  const lastPage = getLastPage(totalPages, currentPage);
  const pageCollection = [];

  for (; page <= lastPage; page += 1) {
    pageCollection.push(page);
  }

  return pageCollection;
};

export const filterVehicles = (vehicles, search) => (
  vehicles.filter((vehicle) => (
    vehicle.combustivel.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
    vehicle.marca.toLowerCase().indexOf(search.toLowerCase()) >= 0
  ))
);

export const getVehiclesByPage = (vehicles, page) => (
  vehicles.filter((vehicle, index) => (
    index >= ((page - 1) * totalItensPerPage) && index < (page * totalItensPerPage)
  ))
);

export const getPaginationConfig = (vehicles, active) => {
  const pages = Math.ceil(vehicles.length / totalItensPerPage);

  return {
    active,
    total: pages,
    collection: getPaginationCollection(pages, active),
  };
};
