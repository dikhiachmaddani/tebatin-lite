import { App, Button, Form, Input, Switch, Typography } from 'antd';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { GeneralContext, GeneralContextType } from '../../../../common/context/GeneralContext';
import { primaryButtonStyle } from "../../../../utils/style";
import { createZodSync } from '../../../../utils/zod-sync';
import { createTaskManagementSchema } from '../schema';

const { Title } = Typography;

export function CreateTaskManagment() {
    const [form] = Form.useForm();
    const { addTask } = useContext(GeneralContext) as GeneralContextType;
    const navigate = useNavigate();
    const { message } = App.useApp();

    const createTaskManagementRules = createZodSync(createTaskManagementSchema);
    const onFinish = async () => {
        const values = await form.validateFields();
        addTask({
            id: uuidv4(),
            name: values.name,
            task: values.task,
            is_done: values.is_done,
        });
        message.success("Task successfully added!");
        navigate('/apps/task-management');
        form.resetFields();
    };

    return (
        <>
            <div style={{ marginBottom: 20 }}>
                <Title level={4} style={{ margin: 0 }}>Create Task Management</Title>
            </div>
            <Form
                form={form}
                style={{ width: '100%' }}
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    name="name"
                    label="Name"
                    required
                    rules={[createTaskManagementRules]}
                >
                    <Input style={{ padding: 10 }} />
                </Form.Item>

                <Form.Item
                    name="task"
                    label="Task"
                    required
                    rules={[createTaskManagementRules]}
                >
                    <Input style={{ padding: 10 }} />
                </Form.Item>

                <Form.Item
                    name="is_done"
                    label="Have you done it?"
                    initialValue={false}
                    valuePropName="checked"
                    rules={[createTaskManagementRules]}
                >
                    <Switch />
                </Form.Item>

                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                    <Button type="default" href='/apps/task-management' style={{ padding: 20 }}>Cancel</Button>
                    <Button style={primaryButtonStyle} htmlType="submit">Submit</Button>
                </div>
            </Form>
        </>
    );
}
