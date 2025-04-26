import { App, Button, Form, Input } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GeneralContext, GeneralContextType } from "../../../../common/context/GeneralContext";
import { authDescriptionStyle, authLinkStyle, primaryButtonFullWidthStyle } from "../../../../utils/style";
import { customThemeColors } from "../../../../utils/theme";
import { createZodSync } from "../../../../utils/zod-sync";
import { loginSchema } from "../schema";

export function Login() {
    const [form] = Form.useForm();
    const { loginUser } = useContext(GeneralContext) as GeneralContextType;
    const navigate = useNavigate();
    const { message } = App.useApp();

    const loginSchemaRules = createZodSync(loginSchema);
    const onFinish = async () => {
        const values = await form.validateFields();
        const login = await loginUser({
            email: values.email,
            password: values.password
        });
        if (login) {
            message.success("Login successfully, Welcome to Club!");
            navigate('/apps/task-management');
            form.resetFields();
        } else {
            message.error("email and password are incorrect, Try Again!");
        }
    };
    return (
        <Form
            form={form}
            onFinish={onFinish}
            style={{ width: '100%', maxWidth: 500 }}
        >
            <h2 style={{ textAlign: 'center', fontSize: 35 }}>Welcome Mate!</h2>
            <p style={authDescriptionStyle}>
                You are now on the login page. If you already have an account, you can fill out this form right away!
            </p>

            <Form.Item
                name="email"
                label="Email"
                labelCol={{ span: 24, style: { gap: 0 } }}
                rules={[loginSchemaRules]}
            >
                <Input style={{ padding: 10 }} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                labelCol={{ span: 24, style: { gap: 0 } }}
                rules={[loginSchemaRules]}
            >
                <Input.Password style={{ paddingLeft: 10, paddingTop: 10, paddingRight: 15, paddingBottom: 10 }} placeholder="Password" />
            </Form.Item>
            <Button htmlType="submit" style={primaryButtonFullWidthStyle}>Log in</Button>

            <p style={authLinkStyle}>
                Don't have an account yet?
                <Link to="/auth/register" style={{ color: customThemeColors.primary.main, fontWeight: 'bold' }}>
                    register here.
                </Link>
            </p>
        </Form>
    );
}
