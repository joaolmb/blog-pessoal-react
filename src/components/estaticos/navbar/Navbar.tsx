import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, AppBar, Toolbar } from '@material-ui/core';
import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogOut() {
        setToken('');
        alert("Log out efetuado");
        navigate('/login')
    }
    return (
        <>
            <AppBar position="static" className='appbar'>
                <Toolbar variant="dense" className='toolbar'>
                    <Link to="/home" className='text-decoration-none'>
                        <Box className='cursor' >
                            <Typography variant="h5" color="inherit" className='fonte'>
                                Blog do Bento
                            </Typography>
                        </Box>
                    </Link>
                    <Box display="flex" justifyContent="start"  >
                        <Link to="/home" className='text-decoration-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/posts" className='text-decoration-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Posts
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/tema" className='text-decoration-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className='text-decoration-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className='cursor' onClick={goLogOut}>
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