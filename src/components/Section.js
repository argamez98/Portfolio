import React from 'react'

const Section = ({ title = '', body }) => {

  return (
    <div id='name-title' class='square' value='click'>
      <div class='name'>
        <span class='title'> Ariel Gamez </span>
        <div class='separator'></div>
        <span class='title'> Software Developer </span>
      </div>
    </div>
  )
}

export default Section