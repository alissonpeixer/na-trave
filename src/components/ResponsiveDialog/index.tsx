
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';

export const ResponsiveDialog = ({ confirmation, onOpen, onClosed }: any) => {

    const yes = () => {
        confirmation('DELETED')
    }

    const canceled = () => {
        confirmation('EXIT')
    }
    return (
        <div>

            <Dialog
                open={onOpen}
                onClose={onClosed}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Gostaria de deletar seu palpite?"}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={canceled}>
                        Cancelar
                    </Button>
                    <Button onClick={yes} >
                        Sim
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
