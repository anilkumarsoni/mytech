import Table from "../../shared/componentes/Table";
import withLoader from "../../shared/HOC/withLoader";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenusBar from "../../shared/componentes/MenusBar/MenusBar";
import { useEffect, useState } from "react";
import { httpService } from '../../Utils/httpService'
import { sortRows } from '../../Utils/UtilFunctions'
import { columns } from './Constants'

const PetList = (props) => {
  const { setLoading } = props;
  const navigate = useNavigate();
  const [rows, setRows] = useState([])

  useEffect(() => {
    (async() => {
      setLoading(true)
      let result = await httpService('pets');
      sortRows(result);
      setRows(result)
      setLoading(false)
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <MenusBar />
      <Grid container spacing={2} p={5}>
        <Grid item xs={12}>
          <Table rows={rows} columns={columns} />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} mt={5}>
          <Button variant="contained" onClick={() => navigate("/")}>
            Add more Pet
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default withLoader(PetList);
