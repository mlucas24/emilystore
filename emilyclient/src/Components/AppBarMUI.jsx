import * as React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Box, Container, IconButton, Link, Button, Icon, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppBarMenu from './AppBarMenu';

const AppBarMUI = ({ user, SignInWithGoogle }) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <AppBarMenu SignInWithGoogle={SignInWithGoogle} user={user}/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        A Little Grace Co.
                    </Typography>
                    <IconButton >
                        <Link href="https://www.instagram.com/marleymaecreations_/"><InstagramIcon color="secondary" /></Link>
                    </IconButton>
                    <IconButton>
                        <Link href="https://www.facebook.com/Marleymaecreations-101516248369235/"><FacebookIcon color="secondary" /></Link>
                    </IconButton>
                    <Typography variant="h6">
                        <Link href="https://www.etsy.com/shop/MarleyMaeCreations?fbclid=IwAR34rb7zeF0lp-d2uzosDu9EBhh_ZkzlgVL2up2pR2hJbHjyasX0VO0Fveg"><Button variant="text" color="secondary">Etsy</Button></Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default AppBarMUI