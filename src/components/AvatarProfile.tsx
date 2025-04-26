import { CloseCircleOutlined } from "@ant-design/icons";
import { App, Avatar, Badge, Dropdown, Flex, MenuProps, Typography } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GeneralContext, GeneralContextType } from "../common/context/GeneralContext";
import { customThemeColors } from "../utils/theme";

const { Text } = Typography;

export default function AvatarProfile() {
    const navigate = useNavigate();
    const { message } = App.useApp();
    const { logoutUser, loggedInUser } = useContext(GeneralContext) as GeneralContextType;

    const handleLogout = () => {
        logoutUser();
        message.success("Logout successfully, Come Again yea!");
        navigate('/');
    }

    const userMenuItems: MenuProps['items'] = [
        {
            key: 'account',
            label: 'My Account',
            disabled: true
        },
        { type: 'divider' },
        {
            key: 'logout',
            label: 'Logout',
            icon: <CloseCircleOutlined />,
            onClick: handleLogout,
            danger: true
        },
    ];

    return (
        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" trigger={['click', 'hover']} arrow>
            <Flex align='center' gap={10}>
                <Badge dot offset={[-5, 45]} color='green'>
                    <Avatar
                        src="/assets/me.png"
                        style={{
                            backgroundColor: customThemeColors.neutral[20],
                            verticalAlign: 'middle',
                        }}
                        size="large"
                    >
                        User
                    </Avatar>
                </Badge>
                <Flex vertical>
                    <Text style={{ margin: 0 }}>{loggedInUser?.name}</Text>
                    <Text style={{
                        color: customThemeColors.neutral[60],
                        margin: 0
                    }}>
                        Super Admin
                    </Text>
                </Flex>
            </Flex>
        </Dropdown>
    )
}