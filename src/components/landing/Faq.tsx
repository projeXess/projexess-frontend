    import type { CSSProperties } from 'react';
    import React from 'react';
    import type { CollapseProps } from 'antd';
    import { Collapse, theme } from 'antd';
    import { FaCaretRight } from 'react-icons/fa';

    const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
        {
            key: '1',
            label: <strong>What does the term PROJEXESS stand for?</strong>,
            children: <p>The term PROJEXESS is a combination of the words project and success because we help projects become successful in every possible way we can.</p>,
            style: panelStyle,
        },
        {
            key: '2',
            label: <strong>How secure is the data on PROJEXESS?</strong>,
            children: <p>Data security is a top priority for PROJEXESS. The platform uses robust encryption techniques to protect user data and ensure that it remains confidential and secure. Additionally, PROJEXESS complies with relevant data protection regulations to safeguard user information.</p>,
            style: panelStyle,
        },
        {
            key: '3',
            label: <strong>What is the difference between PROJEXESS and ChatGPT?</strong>,
            children: <p>PROJEXESS is distinct from ChatGPT. While ChatGPT offers conversational AI and some general market insights information, PROJEXESS specializes in AI-powered project management support with unique features like localized market insights and predictive analysis.</p>,
            style: panelStyle,
        },
        {
            key: '4',
            label: <strong>What is the difference between PROJEXESS and other project management platforms?</strong>,
            children: <p>
                PROJEXESS stands out from other project management platforms in several key ways.<br /><br />
                Firstly, it offers localized market insights and AI-driven predictive analysis, which are tailored to the specific needs of users in regions where real-time data and predictive tools are often lacking.<br /><br />
                Secondly, PROJEXESS emphasizes a personalized user experience, utilizing AI to provide customized recommendations and task prioritization.<br /><br />
                Overall, PROJEXESS offers a unique blend of features that cater to the specific challenges and requirements of users in emerging markets, setting it apart from more general project management platforms.
            </p>,
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
        );
    }

    export default Faq;
