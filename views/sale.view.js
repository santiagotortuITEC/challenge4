const getView = (properties) => `
  <h2>Propiedades en venta</h2>
  <div class="propiedades">
    ${
      properties.map((property) => (`
        <a href="http://localhost:3001/propiedad/${property.slug}">
          <h1>${property.description} [${property.type}]</h1>
          <p>${property.price} ${property.currency}</p>
          <p><em>Sector:</em> ${property.sector ? property.sector : '-'}</p>
          <img src="${property.photo}">
        </a>
      `)).join('')
    }
  </div>
`;

module.exports = { getView };