import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlbumItem';
import './styles.scss'
AlbumList.propTypes = {
  albumList: PropTypes.array
};
AlbumList.defaultProps = {
  albumList: []
}

function AlbumList({ albumList }) {
  return (
    <ul className='album_list'>
      {albumList.map(item => (
        <li key={item.id}>
          <AlbumItem items={item} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;