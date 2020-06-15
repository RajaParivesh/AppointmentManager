import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from "../../Copyright/Copyright";
import AppointmentCard from "../../Appointment/AppointmentCard";
import AppointmentModal from "../../Appointment/AppointmentModal";
import {Redirect} from "react-router-dom";

const styles = theme => ({
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
});

class Availability extends Component {
    state = {
        modalState: false,
        slots: []
    }

    componentDidMount() {
        this.props.getAvailableSlots(this.props.user.token).then((response) => {
            console.log(response.data);
            this.setState({slots: response.data});
        });
    }

    handleClickOpen = () => this.setState({modalState: true});

    handleClose = () => this.setState({modalState: false});

    addAvailability = (payload) => {
        return this.props.addAvailability(payload, this.props.user.token)
            .then((response) => {

                this.setState(prev => ({
                    slots: [...prev.slots, response.data]
                }));

                this.handleClose();
            }).catch((err) => {
                console.debug("Some error occurred while adding slot", err);
                this.handleClose();
            })
    }
    removeSlotAvailability =  (id) => {
        return this.props.removeAvailability(id,this.props.user.token)
            .then((response) =>{
                this.setState(prev =>({
                    slots: prev.slots.filter(e => e.id !== id)
                }));
            })
            .catch((err) => {
                console.debug("Not able to remove the slot", err);
            })
    }

    render(){
        const {classes, user: {token}} = this.props;
        if (!token) return <Redirect to='/login'/>;

        return (
            <Container component="main" maxWidth="sm">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        My Tracked Availabilities
                    </Typography>
                    <br/>
                    <Grid container spacing={2}>

                        {this.state.slots.map(s => <AppointmentCard
                            owner="true"
                            slot={s}
                            key={Math.random()}
                            removeAvailability = {this.removeSlotAvailability}
                            />
                            )
                        }

                        <Grid item md={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.handleClickOpen}
                            >
                                Add Availability
                            </Button>
                        </Grid>
                    </Grid>

                </div>
                <Box mt={5}>
                    <Copyright/>
                </Box>
                <AppointmentModal
                    open={this.state.modalState}
                    handleClose={this.handleClose}
                    handleChange={this.addAvailability}
                    title={"Add Availability"}
                    slot={null}
                />
            </Container>
        );
    }

}

export default withStyles(styles, {withTheme: true})(Availability);