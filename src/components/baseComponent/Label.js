import React from 'react';
import PropTypes from 'prop-types';

const Label = ({htmlFor, className, children, style}) => {
  return (
    <label
    htmlFor={htmlFor}
    className={className}
    style={style}
    >
        {children}
    </label>
  )
}

Label.propTypes = {
    children:PropTypes.any,
    label:PropTypes.any,
    className: PropTypes.string,
}

export default Label