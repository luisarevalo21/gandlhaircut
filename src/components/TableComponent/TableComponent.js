import React from "react";

const tableComponent = props => {
  const data = props.styles.map(element => {
    return (
      <tr>
        <td>
          {element.styleName} ${element.price}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <th>Services Pricing</th>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
};

export default tableComponent;
