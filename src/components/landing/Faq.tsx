import type { CSSProperties } from 'react';
import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse, theme } from 'antd';
import { FaCaretRight } from 'react-icons/fa';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
    {
        key: '1',
        label: 'Frequently Asked Question 1',
        children: <p>{text}</p>,
        style: panelStyle,
    },
    {
        key: '2',
        label: 'Frequently Asked Question 2',
        children: <p>{text}</p>,
        style: panelStyle,
    },
    {
        key: '3',
        label: 'Frequently Asked Question 3',
        children: <p>{text}</p>,
        style: panelStyle,
    },
];
function Faq() {

    const { token } = theme.useToken();

    const panelStyle: React.CSSProperties = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: '2px solid #3aa0ff24',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <div className="w-full flex flex-col gap-5 p-10 bg-[#3aa0ff11]">
            <h1 className="text-[1.3rem] font-medium">Frequently Asked Questions</h1>

            <div className="w-full">
                <Collapse
                    bordered={false}
                    defaultActiveKey={['2']}
                    expandIcon={({ isActive }) => <FaCaretRight rotate={isActive ? 90 : 0} />}
                    style={{ background: token.colorBgContainer }}
                    items={getItems(panelStyle)}
                />
            </div>

        </div>
    )
}

export default Faq