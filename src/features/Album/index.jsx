import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Nhac Kop',
      thumbnail: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/6/5/2/b652d3912b1ae4edf9fc9269e56125f8.jpg"
    },
    {
      id: 2,
      name: 'Nhac Viet',
      thumbnail: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/6/5/2/b652d3912b1ae4edf9fc9269e56125f8.jpg"
    },
    {
      id: 3,
      name: 'Nhac Uk',
      thumbnail: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/6/5/2/b652d3912b1ae4edf9fc9269e56125f8.jpg"
    },
  ]

  return (
    <div>
      <h3>Co the ban se thich</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;