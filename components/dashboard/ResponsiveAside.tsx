import React, { useState } from 'react';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';
import Aside from './Aside';


type Props = {
    open: boolean,
    setOpen: (vl: boolean) => void
}

const ResponsiveAside = ({ open, setOpen }: Props) => {
    const [placement, setPlacement] = useState<DrawerProps['placement']>('left');


    const onClose = () => {
        setOpen(false);
    };


    return (
        <>

            <Drawer
                title="Basic Drawer"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
            >
                <Aside />
            </Drawer>
        </>
    );
};

export default ResponsiveAside;