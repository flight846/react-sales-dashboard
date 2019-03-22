import React from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs'; 

const DialogContainer = (props) => {
    return (
        <Dialog title={"Share this report"} onClose={props.share}>
            <p>Please enter the email address/es of the recipient/s.</p>
            <Input placeholder="example@progress.com" />
            <DialogActionsBar>
                <Button primary={true} onClick={props.share}>Share</Button>
                <Button onClick={props.share}>Cancel</Button>
            </DialogActionsBar>
        </Dialog>
    )
}

export default DialogContainer;
