import { Button, Flex, Table, Typography } from "antd";
import { useContext } from "react";
import { GeneralContext, GeneralContextType } from "../../../../common/context/GeneralContext";
import { TaskManagement } from "../../../../modules/task-managment/type";
import { primaryButtonStyle } from "../../../../utils/style";
import { columns } from "../utils/column";

const { Title } = Typography;

export function ListTaskManagment() {
    const { tasks, removeTask, toggleTaskCompletion } = useContext(GeneralContext) as GeneralContextType;

    return (
        <>
            <Flex align='center' justify='space-between' style={{ marginBottom: 20 }}>
                <Title level={4} style={{ margin: 0 }}>Task Management</Title>
                <Button href='/apps/task-management/create' style={primaryButtonStyle}>Create Task</Button>
            </Flex>
            <Table<TaskManagement> columns={columns({ removeTask, toggleTaskCompletion })} dataSource={tasks} scroll={{ x: 'max-content' }} />
        </>
    );
}