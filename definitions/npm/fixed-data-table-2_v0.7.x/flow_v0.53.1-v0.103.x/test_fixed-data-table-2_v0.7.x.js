/* @flow */
import React from 'react';
import {Cell, Column, ColumnGroup, Table} from 'fixed-data-table-2';

let cell = <Cell/>;
cell = <Cell onColumnResize={(left, width, minWidth, maxWidth, columnKey, event) => {event.target;}}/>;
// $FlowExpectedError
cell = <Cell onColumnResize={(left, width, minWidth, maxWidth, columnKey, event) => minWidth + maxWidth}/>;

// $FlowExpectedError
let column = <Column/>;
column = <Column width={300} minWidth={null}/>;

let columnGroup = <ColumnGroup/>;
// $FlowExpectedError
columnGroup = <ColumnGroup align='top'/>;

// $FlowExpectedError
let table = <Table/>;
table = <Table
  width={900}
  rowsCount={10}
  rowHeight={50}
  headerHeight={60}
/>;
