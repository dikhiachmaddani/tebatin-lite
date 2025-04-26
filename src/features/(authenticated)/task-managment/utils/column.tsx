import { DeleteOutlined, DownOutlined, SwapOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { TaskManagement } from "../../../../modules/task-managment/type";
import { actionButtonStyle } from "../../../../utils/style";

interface IColumnProps {
    removeTask: (id: string) => void;
    toggleTaskCompletion: (id: string) => void;
}

export const columns = ({
    removeTask,
    toggleTaskCompletion
}: IColumnProps): ColumnsType<TaskManagement> => [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Task',
            dataIndex: 'task',
            key: 'task',
        },
        {
            title: 'Label',
            dataIndex: 'is_done',
            key: 'is_done',
            render: (is_done) => {
                if (is_done) return <Tag color="green">It's finished</Tag>;
                else return <Tag color="error">Not finished yet</Tag>;
            },
            filters: [
                {
                    text: "It's finished",
                    value: true,
                },
                {
                    text: 'Not finished yet',
                    value: false,
                },
            ],
            onFilter: (value, record) => record.is_done === value,
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'id',
            render: (id, record) => {
                const items: MenuProps['items'] = [
                    {
                        key: 'is_done',
                        label: record.is_done ? 'Tandai Belum Selesai' : 'Tandai Sudah Selesai',
                        onClick: () => toggleTaskCompletion(id),
                        icon: <SwapOutlined />
                    },
                    {
                        key: 'delete',
                        label: "Delete",
                        onClick: () => removeTask(id),
                        icon: <DeleteOutlined />
                    },
                ];
                return (
                    <Dropdown menu={{ items }} placement="bottomRight" trigger={['click', 'hover']} arrow>
                        <Button icon={<DownOutlined />} iconPosition="end" style={actionButtonStyle}>
                            Select Action
                        </Button>
                    </Dropdown>
                )
            }
        },
    ];
