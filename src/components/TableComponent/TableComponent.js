import React from "react";
import classes from "./TableComponent.module.css";
import Slide from "react-reveal/Slide";

const tableComponent = props => {
  const data = props.styles.map(element => {
    return (
      <tr key={element.styleName}>
        <td className={classes.StyleName}>{element.styleName}</td>
        <td className={classes.Price}>${element.price}</td>
      </tr>
    );
  });

  return (
    <div>
      <Slide left delay={1000}>
        <h2 className={classes.Heading}>Services Pricing</h2>
      </Slide>
      <table className={classes.Table}>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
};

export default tableComponent;
