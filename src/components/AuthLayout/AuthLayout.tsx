import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";
import { backgroundCoverStyle, coverStyle } from "../../utils/style";

export function AuthLayout() {
    return (
        <Row style={{ height: '100vh', padding: 20 }}>
            <Col span={24} lg={12} md={24} sm={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Outlet />
            </Col>
            <Col span={0} lg={12} md={0} sm={0} style={{ borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
                <img src="/assets/sand-background.jpg" alt="Background" style={backgroundCoverStyle} />
                <div style={coverStyle}></div>
                <p style={{ position: 'absolute', zIndex: 2, bottom: 30, left: 30, color: '#fff', fontSize: 40, fontWeight: "bold" }}>
                    Menenun Kebudayaan, Menghubungkan Pelanggan.
                </p>
            </Col>
        </Row>
    );
}
