import { Button, Flex } from "antd";
import { customThemeColors } from "../utils/theme";

export function NotFound() {
    return (
        <Flex style={{ height: '100vh' }} align="center" justify="center" vertical>
            <img src="/assets/not-found.png" alt="not-found" />
            <h2 style={{ textAlign: 'center', fontSize: 35, marginTop: 40 }}>Ooops..! Not Found.</h2>
            <p style={{ textAlign: 'center', fontSize: 15, marginBottom: 20, marginTop: 10, color: customThemeColors.neutral[60] }}>
                The page you are visiting is no longer available on our system.
            </p>
            <Button href="/" style={{ backgroundColor: customThemeColors.primary.main, color: "#fff", padding: 20 }}>
                Home Page
            </Button>
        </Flex>
    );
}
