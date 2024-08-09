import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    children,
    id,
    type,
    name,
    disabled,
    isHidden,
    className,
    dataToggle,
    dataTarget,
    ariaExpanded,
    ariaControls
  }) => {
  return (
    <button 
    key={id}
    type={type}
    name={name}
    id={id}
    className={className}
    disabled={disabled}
    hidden={isHidden}
    data-bs-toggle={dataToggle}
    data-bs-target={dataTarget}
    aria-expanded={ariaExpanded}
    aria-controls={ariaControls}
>
    {children}
</button>
  )
}

Button.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClickHandler: PropTypes.func
};
export default Button