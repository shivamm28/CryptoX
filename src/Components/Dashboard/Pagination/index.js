import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./styles.css"
export default function PaginationControlled({page , handleChange}) {


  return (
    <div className='pagination-component'>
      <Pagination
      sx={{
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "1px solid var(--grey)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--blue)",
            borderColor: "var(--blue)",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
          }}
        count={10} 
        page={page} 
        onChange={(e,v) => handleChange(e,v)} 
        />
    </div>
  );
}