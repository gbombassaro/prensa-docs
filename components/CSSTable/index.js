import {DataTable, Table, TableRow, TableHeader, TableHead, TableCell, TableBody} from 'carbon-components-react';
import React from 'react';
import PropTypes from 'prop-types';

const CSSTable = ({rows, headers}) => {
  return (
    <DataTable rows={rows} headers={headers}>
      {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow {...getRowProps({ row })}>
                {row.cells.map((cell) => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </DataTable>
  )
};

CSSTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      class: PropTypes.string,
      tokens: PropTypes.string,
    })
  ),
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      header: PropTypes.string
    })
  )
}

CSSTable.defaultProps = {
  headers: [
    {
      key: 'class',
      header: 'ClassName',
    },
    {
      key: 'tokens',
      header: 'Tokens',
    },
  ]
}

export default CSSTable;