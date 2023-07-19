import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const headers = config.map((column) => {
    if (column.header)
      return <Fragment key={column.label}>{column.header()}</Fragment>;

    return <th key={column.label}>{column.label}</th>;
  });

  const rows = data.map((rowData) => {
    const cells = config.map((cell) => (
      <td className="p-3" key={cell.label}>
        {cell.render(rowData)}
      </td>
    ));

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {cells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default Table;
