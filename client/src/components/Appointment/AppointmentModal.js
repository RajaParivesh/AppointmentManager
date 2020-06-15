import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import React from "react";
import moment from "moment";

export default function ({open, handleClose, title, handleChange, slot}) {
    const processAvailability = (event) => {
        event.preventDefault();
        const payload = {
            epochStart: moment(event.target.epochStart.value).unix(),
            epochEnd:moment(event.target.epochStart.value).unix(),
            id: moment(event.target.id.value).unix(),
            status: event.target.status.value
        }
        handleChange(payload);
    }

    return (

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <form onSubmit={processAvailability}>
                <DialogContent>

                    <Button id="id" value={null} hidden={true} />

                    <Button id="status" value={1} hidden={true} />

                    <TextField
                        id="epochStart"
                        label="Start date time"
                        type="datetime-local"
                        defaultValue={moment().add(1, 'hour').format("YYYY-MM-DDTHH:mm")}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="epochEnd"
                        label="End date time"
                        type="datetime-local"
                        defaultValue={moment().add(2, 'hour').format("YYYY-MM-DDTHH:mm")}
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
                    <Button type="submit" color="primary">
                        Add
                    </Button>
                </DialogActions>
            </form>
        </Dialog>

    );
}
