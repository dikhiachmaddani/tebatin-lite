import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import {
    Button,
    Flex,
    Layout
} from 'antd';
import AvatarProfile from '../AvatarProfile';

const { Header } = Layout;

export type INavbarProps = {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

export default function Navbar({ collapsed, setCollapsed }: INavbarProps) {
    return (
        <Header style={{ padding: 0, background: '#fff' }}>
            <Flex style={{ height: '100%', padding: '0 20px 0 0' }} justify='space-between' align='center'>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />
                <Flex align='center' gap={10}>
                    <AvatarProfile />
                </Flex>
            </Flex>
        </Header>
    );
}
