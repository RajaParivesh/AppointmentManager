import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

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

export default function ({slot, owner, callback}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const cardActions = () => {
        // Depending on the type of owner actions can change
        return (
            <CardActions>
                &nbsp;&nbsp;<b>Status: &nbsp; &nbsp;</b>Hello world! &nbsp; &nbsp;
                {owner ? <Button color="primary" onClick={handleClickOpen} size="small">Update</Button> : ""}
                {owner ? <Button color="secondary" onClick={handleClickOpen} size="small">Remove</Button>: ""}
                {!owner ?<Button color="primary" onClick={handleClickOpen} size="small">Book</Button>:""}
            </CardActions>
        );
    }
    const classes = useStyles();
    return (
        <Grid item md={12}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    {!owner ? <div> <b>User:</b> "rajaparivesh@gmail.com"</div> : "" }

                    <Grid container spacing={2} >
                        <Grid item md={6}>
                            <b>Start: </b> 24/05/2020 12:45
                        </Grid>
                        <Grid item md={6}>
                            <b>End: </b> 25/05/2020 12:45
                        </Grid>
                    </Grid>

                </CardContent>

                {cardActions()}

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Slot</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To Add your slot, please enter your details here. occasionally.
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
    );
}

