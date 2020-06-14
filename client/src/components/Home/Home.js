import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


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

export default function Home() {

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
                    Welcome to the Event Management Website
                </Typography>
                <br/>

                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item md={12} md={12}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                       A goal without a plan is just a wish
                                    </Typography>
                                    <br/>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                       There are some people who live in a dream world, and there are some who face reality and then there are those who turn one into the other.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>


                        <Grid item md={12} md={6}>
                            <Link to="/login">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Login
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item md={12} md={6}>
                            <Link to="/register">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submit}
                                >
                                    Register
                                </Button>
                            </Link>

                        </Grid>
                    </Grid>

                </form>


            </div>

        </Container>
    );
}