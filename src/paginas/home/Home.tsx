import "./Home.css";
import { Box, Grid, Typography } from '@mui/material'
import { Paper, Button } from '@material-ui/core'

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
            <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="center">
                        <h1>Afinal, o Hulk de terno é o:</h1>
                    </Box>
                    <img src="https://pbs.twimg.com/media/ET-2E_dXkAIonYV.png" alt="Hulk Agiota" style={{ width: "100%", height: "100%" }} />
                    <Box display="flex" justifyContent="center" p={2}>
                        <Button variant="contained" color="primary">Hulk Agiota</Button>
                        <Button variant="contained" color="secondary">Hulk Cinéfilo</Button>
                    </Box>
                </Box>
            </Paper>
        </>
    );
}

export default Home;