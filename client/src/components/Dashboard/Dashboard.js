import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.linkedin.com/in/raja-parivesh/">
                Raja Parivesh
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}








const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Dashboard() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (

        <Container component="main" maxWidth="sm" >
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Welcome to the DashBoard
                </Typography>
                <br/>
                {/*----------------*/}
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item md={12} md={12}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Quotes:
                                    </Typography>
                                    <br/>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Start Date Time : 24/05/2020 12:45
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        End Date Time : 25/05/2020 12:45
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>


                        <Grid item md={12} md={4}>
                            <Link to="/availability">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    My Availability
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item md={12} md={4}>
                            <Link to="/book-others-time">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Book Others Time
                                </Button>
                            </Link>
                         </Grid>
                         <Grid item md={12} md={4}>
                            <Link to="/my-booked-slot">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    My Booked Slot
                                </Button>
                            </Link>
                         </Grid>
                    </Grid>

                </form>
                {/*-------------------------------*/}

            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}