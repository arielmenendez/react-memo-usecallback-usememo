import PropTypes from 'prop-types';
import { memo } from 'react';

const Child = (props) => {
  function changeNumber() {
    props.changeNumber(Math.random());
  }

  console.log('here');

  return (
    <div>
      <h1>Child: {props.number}</h1>
      <button onClick={changeNumber}>Click to change child number</button>
    </div>
  );
};

Child.propTypes = {
  number: PropTypes.number.isRequired,
  changeNumber: PropTypes.func.isRequired,
};

export default memo(Child);
