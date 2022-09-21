import { DataGrid } from "@mui/x-data-grid";
import { MAX_ROWS } from '../../../Utils/constants'



const Table = ({rows = [], columns = []}) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={MAX_ROWS}
        rowsPerPageOptions={[MAX_ROWS]}
      />
    </div>
  );
}

export default Table