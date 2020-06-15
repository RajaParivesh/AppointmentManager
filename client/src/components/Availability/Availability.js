import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from "../Copyright/Copyright";
import AppointmentCard from "../Appointment/AppointmentCard";
import AppointmentModal from "../Appointment/AppointmentModal";

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

export default function Availability() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const classes = useStyles();
    return (
        <Container component="main" maxWidth="sm" >
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    My Tracked Availabilities
                </Typography>
                <br/>
                <Grid container spacing={2}>
                    <AppointmentCard owner="true"/>
                    <AppointmentCard owner="true"/>
                    <AppointmentCard owner="true"/>
                    <Grid item md={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleClickOpen}
                        >
                            Add Availability
                        </Button>
                    </Grid>
                </Grid>

            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
            <AppointmentModal open={open} handleClose={handleClose} title={"Add Availability"} slot={null}/>
        </Container>
    );
}