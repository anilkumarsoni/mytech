import withLoader from "../../shared/HOC/withLoader";
import {
  Typography,
  Container,
  TextField,
  Box,
  Grid,
  CssBaseline,
  Avatar,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { useState, useMemo } from "react";
import MenusBar from "../../shared/componentes/MenusBar/MenusBar";
import { httpService } from "../../Utils/httpService";
import { displayAlert } from "../../Utils/UtilFunctions";
import { VALIDATION_MSG, MAX_LENGTH } from "./Constants";

const CreatePet = (props) => {
  const { setLoading } = props;
  const intialState = { name: "", tag: "", error: {} };
  const [formData, setFormData] = useState(intialState);
  const [alert, setAlert] = useState(null);

  const disabled = useMemo(
    () => formData.error.name !== "" || formData.error.tag !== "",
    [formData]
  );

  const handleChange = (e) => {
    const error = { ...formData.error };
    error[e.target.name] = "";
    if (e.target.value.trim() === "") {
      error[e.target.name] = VALIDATION_MSG;
    }
    setFormData((prev) => ({
      ...prev,
      error,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!disabled) {
      setLoading(true);
      const { name, tag } = formData;
      const reqParams = {
        id: Date.now().toString(),
        name,
        tag,
      };
      await httpService("pets", "POST", reqParams);
      setFormData(intialState);
      setLoading(false);
      displayAlert(setAlert);
    }
  };

  return (
    <>
      <MenusBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={alert}
          >
            <Alert severity="success" sx={{ width: "100%" }}>
              Pet added successfully!
            </Alert>
          </Snackbar>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <PetsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add pet
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  inputProps={{ maxLength: MAX_LENGTH }}
                  autoComplete="given-name"
                  size="small"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  onChange={handleChange}
                  onBlur={handleChange}
                  value={formData.name}
                  error={
                    formData.error["name"] !== undefined &&
                    formData.error.name !== ""
                  }
                  helperText={formData.error.name}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  inputProps={{ maxLength: MAX_LENGTH }}
                  size="small"
                  id="tag"
                  label="Tag"
                  name="tag"
                  value={formData.tag}
                  onChange={handleChange}
                  onBlur={handleChange}
                  error={
                    formData.error["tag"] !== undefined &&
                    formData.error.tag !== ""
                  }
                  helperText={formData.error.tag}
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disabled}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default withLoader(CreatePet);
