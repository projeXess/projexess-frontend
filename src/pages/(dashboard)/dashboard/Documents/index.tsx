import Subheader from "@/components/dashboard/Subheader"
import { FileMinus, FileQuestion, FileTextIcon, MoreVertical } from "lucide-react"
import { Table } from "antd";
import { Avatar } from "flowbite-react";

const columns = [
    {
        title: "File",
        dataIndex: 'file',
        key: 'file',
        render: (prop: { fileName: string, fileType: string }) => {
            return (
                <div className="flex items-center gap-5">
                    {
                        prop.fileType === 'doc' ? (
                            <FileTextIcon className="text-blue-500" />
                        ) : prop.fileType === 'pdf' ? (
                            <FileMinus className="text-red-500" />
                        ) : <FileQuestion />
                    }
                    <h1>{prop?.fileName}</h1>
                </div>
            )
        }
    },
    {
        title: 'Opened',
        dataIndex: 'opened',
        key: 'opened'
    },
    {
        title: 'Size',
        dataIndex: 'size',
        key: 'size'
    },
    {
        title: 'Shared',
        dataIndex: 'shared',
        key: 'shared',
        render: (prop: unknown) => {
            if (typeof prop === 'string') {
                return prop
            } else {
                return (
                    <Avatar.Group>
                        <Avatar placeholderInitials='T' rounded stacked />
                        <Avatar rounded placeholderInitials='D' stacked />
                        <Avatar rounded placeholderInitials="L" stacked />
                    </Avatar.Group>
                )
            }
        }
    },
    {
        title: 'Header',
        dataIndex: 'header',
        key: 'header',
        render: () => {
            return (
                <div className="w-full flex items-center justify-between ">
                    <button className="btn-outlined p-2 rounded-sm">Open</button>
                    <button>
                        <MoreVertical />
                    </button>
                </div>
            )
        }
    }
]

const dataSource = [
    {
        file: {
            fileType: "pdf",
            fileName: "SpeedSense User Manual"
        },
        opened: 'Apr 10',
        size: '500 KB',
        shared: 'Only You',
        header: "open"
    }, 
    {
        file: {
            fileType: "doc",
            fileName: "SpeedSense Technical Specifications"
        },
        opened: 'Apr 11',
        size: '300 KB',
        shared: 'Only You',
        header: "open"
    }, 
    {
        file: {
            fileType: "doc",
            fileName: "SpeedSense Installation Guide"
        },
        opened: 'Apr 12',
        size: '350 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "pdf",
            fileName: "SpeedSense Compliance Report"
        },
        opened: 'Apr 13',
        size: '450 KB',
        shared: 'Only You',
        header: "open"
    }, 
    {
        file: {
            fileType: "pdf",
            fileName: "SpeedSense Pilot Program Results"
        },
        opened: 'Apr 14',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "doc",
            fileName: "SpeedSense Regulatory Compliance"
        },
        opened: 'Apr 15',
        size: '500 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "pdf",
            fileName: "SpeedSense Training Materials"
        },
        opened: 'Apr 16',
        size: '550 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "doc",
            fileName: "SpeedSense Data Analysis"
        },
        opened: 'Apr 17',
        size: '450 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "doc",
            fileName: "SpeedSense Feedback Summary"
        },
        opened: 'Apr 18',
        size: '300 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "pdf",
            fileName: "SpeedSense Maintenance Guide"
        },
        opened: 'Apr 19',
        size: '600 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "doc",
            fileName: "SpeedSense Market Analysis"
        },
        opened: 'Apr 20',
        size: '350 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "pdf",
            fileName: "SpeedSense Development Plan"
        },
        opened: 'Apr 21',
        size: '700 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "doc",
            fileName: "SpeedSense User Feedback"
        },
        opened: 'Apr 22',
        size: '250 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "pdf",
            fileName: "SpeedSense Cost Analysis"
        },
        opened: 'Apr 23',
        size: '550 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "pdf",
            fileName: "SpeedSense Marketing Strategy"
        },
        opened: 'Apr 24',
        size: '600 KB',
        shared: 'Only You',
        header: "open"
    },
];




function index() {
    return (
        <div className="w-full h-auto p-3 flex gap-4 flex-col">
            <Subheader
                description="Manage and control the team’s documents by catetory"
                title="Documents"
            />

            <div className="w-full flex justify-between p-3 items-center">
                <h1 className="font-bold text-[#272833] text-[20px]">Recent</h1>
                {/* <div className="flex gap-2">
                    <button>
                        <LucideGrid2X2 />
                    </button>
                    <button>
                        <Menu />
                    </button>
                </div> */}
            </div>

            <div className="w-full">
                <Table
                    className="w-full overflow-auto"
                    dataSource={dataSource}
                    columns={columns}
                    rowSelection={{ type: 'checkbox' }}
                    pagination={{ showQuickJumper: true, showPrevNextJumpers: true, showSizeChanger: true }}
                />
            </div>
        </div>
    )
}

export default index