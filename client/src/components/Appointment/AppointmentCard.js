import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppointmentModal from "./AppointmentModal";
import * as moment from "moment";
import AppConstant from "../../constants/AppConstant";

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
                &nbsp;&nbsp;<b>Status: &nbsp; &nbsp;</b> {AppConstant.STATUS_MAP[slot.statusId]} &nbsp; &nbsp;
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
                            <b>Start: </b> {moment(slot.epochStart * 1000).format("DD/MM/YYYY HH:mm")}
                        </Grid>
                        <Grid item md={6}>
                            <b>End: </b> {moment(slot.epochEnd * 1000).format("DD/MM/YYYY HH:mm")}
                        </Grid>
                    </Grid>
                </CardContent>

                {cardActions()}

            </Card>
            <AppointmentModal open={open} handleClose={handleClose} title={"Update Availability"} slot={slot}/>
        </Grid>
    );
}

