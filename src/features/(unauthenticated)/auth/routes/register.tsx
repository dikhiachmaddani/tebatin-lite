import { App, Button, Form, Input } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { GeneralContext, GeneralContextType } from "../../../../common/context/GeneralContext";
import { authDescriptionStyle, authLinkStyle, primaryButtonFullWidthStyle } from "../../../../utils/style";
import { customThemeColors } from "../../../../utils/theme";
import { createZodSync } from "../../../../utils/zod-sync";
import { createUserSchema } from "../schema";

export function Register() {
    const [form] = Form.useForm();
    const { addUser } = useContext(GeneralContext) as GeneralContextType;
    const navigate = useNavigate();
    const { message } = App.useApp();

    const createUserRules = createZodSync(createUserSchema);
    const onFinish = async () => {
        const values = await form.validateFields();
        addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email,
            password: values.password
        });
        message.success("User successfully added, let's login!");
        navigate('/auth/login');
        form.resetFields();
    };
    return (
        <Form
            form={form}
            onFinish={onFinish}
            style={{ width: '100%', maxWidth: 500 }}
        >
            <h2 style={{ textAlign: 'center', fontSize: 35 }}>You Haven't Joined Yet, Mate?</h2>
            <p style={authDescriptionStyle}>
                Oh my goodness......!!! Come on, join us now by filling out the form below!
            </p>

            <Form.Item
                required
                name="name"
                label="Name"
                rules={[createUserRules]}
                labelCol={{ span: 24, style: { gap: 0 } }}
            >
                <Input style={{ padding: 10 }} placeholder="Name" />
            </Form.Item>

            <Form.Item
                required
                name="email"
                label="Email"
                rules={[createUserRules]}
                labelCol={{ span: 24, style: { gap: 0 } }}
            >
                <Input style={{ padding: 10 }} placeholder="Email" />
            </Form.Item>
            <Form.Item
                required
                name="password"
                label="Password"
                rules={[createUserRules]}
                labelCol={{ span: 24, style: { gap: 0 } }}
            >
                <Input.Password style={{ paddingLeft: 10, paddingTop: 10, paddingRight: 15, paddingBottom: 10 }} placeholder="Password" />
            </Form.Item>
            <Button htmlType="submit" style={primaryButtonFullWidthStyle}>Register</Button>
            <p style={authLinkStyle}>
                Do you have an account?
                <Link to="/auth/login" style={{ color: customThemeColors.primary.main, fontWeight: 'bold' }}>
                    login here!
                </Link>
            </p>
        </Form>
    );
}
