import React from 'react';
import propTypes from 'prop-types';

function Description({ text, maxCount }) {  //Burada Filmin açıklaması 100 karakterden uzun ise üçnokta ile açıklamayı durdurduk.
  return (
    <>{text.length > maxCount ? text.substring(0, maxCount) + '...' : text}</>
  );
}
Description.propTypes = {
  text: propTypes.string.isRequired,
  maxCount: propTypes.number,
};

Description.defaultProps = {
  maxCount: 100,
};

export default Description;
