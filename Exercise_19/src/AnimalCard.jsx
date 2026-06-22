import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({
  additional,
  diet,
  name,
  scientificName,
  showAdditional,
  size,
  image
}) {
  return (
    <div className="animal-card">
      <img src={image} alt={name} className="animal-image" />
      <h2 className="animal-name">{name}</h2>
      <div className="animal-details">
        <div className="detail-item">
          <strong>Scientific Name:</strong> {scientificName}
        </div>
        <div className="detail-item">
          <strong>Size:</strong> {size} kg
        </div>
        <div className="detail-item">
          <strong>Diet:</strong> {diet.join(', ')}
        </div>
      </div>
      <button className="btn-more-info" onClick={() => showAdditional(additional)}>
        More Info
      </button>
    </div>
  );
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditional: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  image: PropTypes.string
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information',
    link: 'No Additional Information'
  }
};
