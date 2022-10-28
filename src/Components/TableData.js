import React from 'react';

const TableData = ({ data }) => {

    return (
        <td className='px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-left border-t-2' >
            {data}
        </td>
    );
}

export default TableData;