import {
    Flex,
    Layout,
    Menu,
    MenuProps
} from 'antd';
import { useLocation } from 'react-router-dom';

const { Header, Sider } = Layout;

export type ISidebarProps = {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
    sidebarItem?: MenuProps['items'];
}

export default function Sidebar({ collapsed, setCollapsed, sidebarItem }: ISidebarProps) {
    const { pathname } = useLocation();

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
            collapsedWidth={0}
            breakpoint="md"
            style={{ background: '#fff' }}
            width={250}
        >
            <Header style={{ padding: 0, background: '#fff' }}>
                <Flex style={{ height: '100%', padding: '0 20px' }} justify='center' align='center'>
                    <img
                        src='/assets/logo-tebatin.png'
                        alt='logo tebatin'
                        width={100}
                        height={23}
                    />
                </Flex>
            </Header>
            <Menu
                defaultSelectedKeys={[pathname]}
                selectedKeys={[pathname]}
                className="custom-menu"
                style={{ overflow: 'auto', padding: '0 5px' }}
                items={sidebarItem ?? []}
            />
        </Sider>
    );
}
