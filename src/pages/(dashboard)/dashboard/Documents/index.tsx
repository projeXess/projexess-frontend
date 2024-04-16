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
                <div className="w-full flex items-center justify-between">
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
            fileName: "UART Communication"
        },
        opened: 'Mar 30',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    }, {
        file: {
            fileType: "doc",
            fileName: "UART Communication"
        },
        opened: 'Mar 30',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    }, {
        file: {
            fileType: "doc",
            fileName: "UART Communication"
        },
        opened: 'Mar 30',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "pdf",
            fileName: "UART Communication"
        },
        opened: 'Mar 30',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    }, {
        file: {
            fileType: "pdf",
            fileName: "UART Communication"
        },
        opened: 'Mar 30',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "doc",
            fileName: "UART Communication"
        },
        opened: 'Mar 30',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "pdf",
            fileName: "UART Communication"
        },
        opened: 'Mar 30',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "doc",
            fileName: "UART Communication"
        },
        opened: 'Mar 30',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "doc",
            fileName: "UART Communication"
        },
        opened: 'Mar 30',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "pdf",
            fileName: "UART Communication"
        },
        opened: 'Mar 30',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "doc",
            fileName: "UART Communication"
        },
        opened: 'Mar 30',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "pdf",
            fileName: "UART Communication"
        },
        opened: 'Mar 30',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "doc",
            fileName: "UART Communication"
        },
        opened: 'Mar 30',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "pdf",
            fileName: "UART Communication"
        },
        opened: 'Mar 30',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    },
    {
        file: {
            fileType: "pdf",
            fileName: "UART Communication"
        },
        opened: 'Mar 30',
        size: '400 KB',
        shared: 'Only You',
        header: "open"
    },
]



function index() {
    return (
        <div className="w-full h-auto p-3 flex gap-4 flex-col">
            <Subheader
                description="Manage and control the team’s progress by catetory"
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