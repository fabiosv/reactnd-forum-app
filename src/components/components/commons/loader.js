import {PacmanLoader} from 'react-spinners'
import React from 'react'
import './loader.css'

function Loader (props) {
  const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const {loading} = props;
  return (
    <div className='loader'>
      <PacmanLoader
        css={override}
        sizeUnit={"px"}
        size={25}
        color={'#123abc'}
        loading={loading}
      />
    </div>
  )
}

export default Loader