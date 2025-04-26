import { Col, Layout, Row, theme } from "antd";
import { customThemeColors } from "../../utils/theme";

const { Footer } = Layout;

export default function HomeFooter() {
    const { token } = theme.useToken();
    return (
        <Footer style={{
            background: customThemeColors.neutral[20],
            padding: 24,
            borderRadius: token.borderRadiusLG,
            margin: '50px'
        }}>
            <Row gutter={[0, 50]} style={{ padding: 20 }}>
                <Col span={6} xs={24} sm={24} lg={6}>
                    <img src='/assets/logo-tebatin.png' alt='logo tebatin' width={150} height={35} />
                    <p style={{ marginTop: 15 }}>Menenun Kebudayaan, Menghubungkan Pelanggan.</p>
                </Col>
                <Col span={6} xs={24} sm={24} lg={6}>
                    <p style={{ marginBottom: 20, fontWeight: 'bold', fontSize: 17 }}>Social Media</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        <a style={{ color: customThemeColors.primary.main }} href="">Instagram</a>
                        <a style={{ color: customThemeColors.primary.main }} href="">Facebook</a>
                        <a style={{ color: customThemeColors.primary.main }} href="">Twitter</a>
                    </div>
                </Col>
            </Row>
            <p style={{ textAlign: 'center', marginTop: 50 }}>Copyright &copy; {new Date().getFullYear()} Dikhi Achmad Dani. All rights reserved.</p>
        </Footer>
    )
}