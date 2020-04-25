import React from "react";
import PropTypes from "prop-types";

import s from "./Row.module.css";

const Row = ({ left, right }) => {
  return (
    <div className={s.Row}>
      <div className={s.Left}>{left}</div>
      <div className={s.Right}>{right}</div>
    </div>
  );
};

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default Row;
