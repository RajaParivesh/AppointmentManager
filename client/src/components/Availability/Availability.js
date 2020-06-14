import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
import Copyright from "../Copyright/Copyright";


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
                    Available Slots
                </Typography>

                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item md={12} md={9}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Email : "rajaparivesh@gmail.com"
                                    </Typography>
                                    <br/>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Start Date Time : 24/05/2020 12:45
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        End Date Time : 25/05/2020 12:45
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" color="primary" onClick={handleClickOpen} size="small">Update</Button>
                                </CardActions>

                                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Add Slot</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            To Add your slot, please enter your details here.                                             occasionally.
                                        </DialogContentText>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="Email Address"
                                            type="email"
                                            fullWidth
                                        />
                                        <TextField
                                            id="datetime-local"
                                            label="Start data time"
                                            type="datetime-local"
                                            defaultValue="2017-05-24T10:30"
                                            fullWidth
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            id="datetime-local"
                                            label="End data time"
                                            type="datetime-local"
                                            defaultValue="2017-05-24T10:30"
                                            fullWidth
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} color="primary">
                                            Cancel
                                        </Button>
                                        <Button onClick={handleClose} color="primary">
                                            Add
                                        </Button>
                                    </DialogActions>
                                </Dialog>


                            </Card>
                        </Grid>
                        <Grid item md={12} md={3}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Add
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >
                               Remove
                            </Button>
                        </Grid>
                    </Grid>

                </form>

                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item md={12} md={9}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Email : "rajaparivesh@gmail.com"
                                    </Typography>
                                    <br/>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Start Date Time : 24/05/2020 12:45
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        End Date Time : 25/05/2020 12:45
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" color="primary" onClick={handleClickOpen} size="small">Update</Button>
                                </CardActions>

                                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Add Slot</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            To Add your slot, please enter your details here.                                             occasionally.
                                        </DialogContentText>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="Email Address"
                                            type="email"
                                            fullWidth
                                        />
                                        <TextField
                                            id="datetime-local"
                                            label="Start data time"
                                            type="datetime-local"
                                            defaultValue="2017-05-24T10:30"
                                            className={classes.textField}
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            id="datetime-local"
                                            label="End data time"
                                            type="datetime-local"
                                            defaultValue="2017-05-24T10:30"
                                            className={classes.textField}
                                            fullWidth
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} color="primary">
                                            Cancel
                                        </Button>
                                        <Button onClick={handleClose} color="primary">
                                            Add
                                        </Button>
                                    </DialogActions>
                                </Dialog>


                            </Card>
                        </Grid>
                        <Grid item md={12} md={3}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Add
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >
                                Remove
                            </Button>
                        </Grid>
                    </Grid>

                </form>


            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}