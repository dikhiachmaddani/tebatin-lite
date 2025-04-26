import { MenuUnfoldOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Drawer, Flex, Grid, Layout } from "antd";
import { CSSProperties, useContext, useState } from "react";
import { GeneralContext, GeneralContextType } from "../../common/context/GeneralContext";
import { blackButtonFullWidthStyle, primaryOutlineButtonFullWidthStyle } from "../../utils/style";
import { customThemeColors } from "../../utils/theme";
import AvatarProfile from "../AvatarProfile";

const { Header } = Layout;

const headerStyle: CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '40px 50px',
    background: '#fff',
};

export default function Navbar() {
    const screens = Grid.useBreakpoint();
    const [open, setOpen] = useState(false);
    const { cartItems, loggedInUser } = useContext(GeneralContext) as GeneralContextType;

    const renderNavItems = () => (
        <Flex align='center' gap={15}>
            {loggedInUser ? (
                <AvatarProfile />
            ) : (
                <>
                    <Button style={blackButtonFullWidthStyle} href="/auth/login">Log in</Button>
                    <Button style={primaryOutlineButtonFullWidthStyle} href="/auth/register">Register</Button>
                </>
            )}
        </Flex>
    );

    return (
        <>
            <Header style={headerStyle}>
                <img src='/assets/logo-tebatin.png' alt='logo tebatin' width={100} height={23} />
                <Flex align='center' gap={15}>
                    <Badge color='orange' count={cartItems.length}>
                        <Button
                            icon={<ShoppingCartOutlined />}
                            href="/cart"
                            style={{
                                border: `1px solid ${customThemeColors.primary.main}`,
                                color: customThemeColors.primary.main,
                                padding: 20,
                            }}
                        />
                    </Badge>
                    {screens.sm ? renderNavItems() : (
                        <Button
                            icon={<MenuUnfoldOutlined />}
                            onClick={() => setOpen(true)}
                            style={{
                                backgroundColor: customThemeColors.primary.main,
                                color: customThemeColors.neutral[10],
                                padding: 20,
                            }}
                        />
                    )}
                </Flex>
            </Header>
            <Drawer onClose={() => setOpen(false)} open={open}>
                {renderNavItems()}
            </Drawer>
        </>
    );
}
