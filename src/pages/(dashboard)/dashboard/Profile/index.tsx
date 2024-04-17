import AccountSettings from "@/components/dashboard/AccountSettings";
import Notifications from "@/components/dashboard/Notifications";
import Subheader from "@/components/dashboard/Subheader"
import { Tabs } from "antd";
import type { TabsProps } from 'antd';


const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Account Settings',
        children: <AccountSettings />,
    },
    {
        key: '2',
        label: 'Notifications',
        children: <Notifications />,
    },

];

function index() {
    return (
        <div className="w-full p-5">
            <Subheader
                description=""
                title="Profile Settings"
            />
            <div className="w-full p-4 h-auto bg-white">
                <Tabs defaultActiveKey="1" items={items} />
            </div>
        </div>
    )
}

export default index