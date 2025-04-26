import { FileFilled } from "@ant-design/icons";
import {
    Layout,
    MenuProps,
    theme
} from 'antd';
import { useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { GeneralContext, GeneralContextType } from "../../common/context/GeneralContext";
import { customThemeColors } from "../../utils/theme";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const { Content, Footer } = Layout;

const sidebarItem: MenuProps['items'] = [
    {
        key: `/apps/task-management`,
        icon: <FileFilled />,
        label: (
            <Link to="/apps/task-management">Task Management</Link>
        ),
    },
];

export function AdminLayout() {
    const { token } = theme.useToken();
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const { loggedInUser } = useContext(GeneralContext) as GeneralContextType;

    if (!loggedInUser) navigate('/');
    return (
        <Layout hasSider style={{ minHeight: '100vh' }}>
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} sidebarItem={sidebarItem} />
            <Layout>
                <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content style={{ margin: '20px 20px 0', overflow: 'initial' }}>
                    <div style={{
                        backgroundColor: customThemeColors.neutral[10],
                        padding: 25,
                        borderRadius: token.borderRadiusLG
                    }}>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Copyright &copy; {new Date().getFullYear()} Dikhi Achmad Dani. All rights reserved.
                </Footer>
            </Layout>
        </Layout>
    );
}
