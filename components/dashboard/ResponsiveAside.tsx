'use client'
import React, { useContext, useState } from 'react';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';
import Aside from './Aside';
import { AsideContext } from '@/providers/Dashboard/AsideProvider';
import { DefaultType } from '@/types/providerTypes';


type Props = DefaultType;

const ResponsiveAside = ({ isOpen, setIsOpen }: Props) => {
    const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

    const onClose = () => {
        setIsOpen(false);
    };


    return (
        <>

            <Drawer
                title="Basic Drawer"
                placement={placement}
                closable={true}
                onClose={onClose}
                open={isOpen}
                key={placement}
            >
                <Aside />
            </Drawer>
        </>
    );
};

export default ResponsiveAside;