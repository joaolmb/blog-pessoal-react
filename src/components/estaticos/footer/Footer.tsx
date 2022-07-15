import { Box, Grid, Typography } from '@mui/material'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './footer.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';

function Footer() {
    const token = useSelector<TokenState, TokenState["token"]> (
        (state) => state.token
        );

        var footerComponent;
        
        if(token!='') {
            footerComponent =
            <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid alignItems="center" item xs={12}>
                            <Box className='box1'>
                                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                                    <Typography variant="h5" align="center" gutterBottom className='texto'>Siga-me nas redes sociais </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" justifyContent="center">
                                    <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                        <FacebookIcon className='social' />
                                    </a>
                                    <a href="https://www.instagram.com/j_marqs/" target="_blank">
                                        <InstagramIcon className='social' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/joaolmb/" target="_blank">
                                        <LinkedInIcon className='social' />
                                    </a>
                                </Box>
                            </Box>
                            <Box className='box2'>
                                <Box paddingTop={1}>
                                    <Typography variant="subtitle2" align="center" gutterBottom className='texto' >© 2022 Copyright:</Typography>
                                </Box>
                                <Box>
                                    <a target="_blank" href="https://brasil.generation.org">
                                        <Typography variant="subtitle2" gutterBottom className='texto' align="center">brasil.generation.org</Typography>
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
        }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;