import { Toolbar, Box } from '@mui/material';
import { Typography, AppBar } from '@material-ui/core';

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                        <Box style={{ cursor: "pointer" }} >
                            <Typography variant="h5" color="inherit">
                                Blog do Bento
                            </Typography>
                        </Box>

                        <Box display="flex" justifyContent="start">
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Posts
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
        </>
    );
}

export default Navbar;