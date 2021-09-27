import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
AlbumItem.propTypes = {
  items: PropTypes.object,
};
AlbumItem.defaultProps = {
  items: null,
}
function AlbumItem({ items }) {
  const { name, thumbnail } = items
  return (
    <div className='album'>
      <div className='album_thumbnail'>
        <img src={thumbnail} alt='thumbnail' />
      </div>
      <p className='album_name'>
        {name}
      </p>
    </div>
  );
}

export default AlbumItem;