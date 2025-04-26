import { Breadcrumb, Col, Row, Skeleton } from "antd";
import { Breadcrumbs } from "../../../../common/breadcrumbs";
import { customThemeColors } from "../../../../utils/theme";

export function DetailPageSkeleton() {
    return (
        <section>
            <Breadcrumb style={{ marginBottom: 20 }} items={Breadcrumbs.HomePage.Detail} />
            <Row gutter={30}>
                <Col span={15} xs={24} sm={24} md={15} lg={15}>
                    <Skeleton.Image active />
                </Col>
                <Col span={9} xs={24} sm={24} md={9} lg={9}>
                    <section style={{ backgroundColor: customThemeColors.neutral[20], borderRadius: '10px', padding: 20 }}>
                        <Skeleton active paragraph={{ rows: 1 }} />
                        <Skeleton.Button active block size="large" />
                        <Skeleton paragraph={{ rows: 2 }} />
                        <Skeleton.Button active block size="large" />
                    </section>
                </Col>
            </Row>
        </section>
    )
}