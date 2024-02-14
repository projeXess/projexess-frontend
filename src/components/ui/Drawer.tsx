/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


type Anchor = 'left';

type Props = {
    state: boolean;
    toggleDrawer: (vl: Anchor, open: boolean) => React.ReactEventHandler;

}

export default function Drawer({ state, toggleDrawer }: Props) {



    return (

        <React.Fragment>
            <SwipeableDrawer
                anchor={"left"}
                open={state}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                Hello world
            </SwipeableDrawer>
        </React.Fragment>
    );
}