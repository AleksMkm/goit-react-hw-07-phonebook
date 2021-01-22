import React from 'react';
// import { css } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';

function Loader() {
  return (
    <BeatLoader
      // css={css`
      //   margin-top: 140px;
      // `}
      size={30}
      margin={10}
      color={'black'}
      loading={true}
    />
  );
}

export default Loader;
