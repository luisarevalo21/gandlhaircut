import React from "react";
import classes from "./TableComponent.module.css";

const tableComponent = props => {
  const data = props.styles.map(element => {
    return (
      <tr>
        <td className={classes.StyleName}>{element.styleName}</td>
        <td className={classes.Price}>${element.price}</td>
      </tr>
    );
  });

  return (
    <div>
      <h2 className={classes.Heading}>Services Pricing</h2>
      <table className={classes.Table}>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
};

export default tableComponent;
