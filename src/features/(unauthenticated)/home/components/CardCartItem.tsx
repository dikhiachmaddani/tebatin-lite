import { DeleteOutlined, StarFilled } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { CartItem } from "../../../../modules/product/type";
import { backgroundCoverStyle, dangerButtonStyle } from "../../../../utils/style";
import { customThemeColors } from "../../../../utils/theme";
import { formatCurrency } from "../../../../utils/utils";

const { Text } = Typography;

type ICardCartItemProps = {
    cart: CartItem;
    handleRemoveItem: (id: string) => void;
}

export default function CardCartItem({ cart, handleRemoveItem }: ICardCartItemProps) {
    return (
        <section style={{ backgroundColor: customThemeColors.neutral[20], borderRadius: '10px', padding: 20 }}>
            <Row gutter={20}>
                <Col span={15} xs={24} sm={24} md={15} lg={5}>
                    <div style={{ borderRadius: '10px', overflow: 'hidden', position: 'relative', width: '100%', height: '100px', marginBottom: 10 }}>
                        <img src={cart.img} alt={cart.title} style={backgroundCoverStyle} />
                    </div>
                </Col>
                <Col span={9} xs={24} sm={24} md={9} lg={15} style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ marginBottom: 10 }}>Batik Grungu</h1>
                        <p style={{ fontSize: 15 }}>{formatCurrency(200000)}</p>
                        <Row gutter={30} style={{ margin: '10px 0' }}>
                            <Col style={{ padding: 0 }}>
                                <Text type="secondary">Terjual </Text>
                                <Text strong>{cart.sold}</Text>
                            </Col>
                            <Col>
                                <Text strong><StarFilled /> </Text>
                                <Text strong>{cart.rating} </Text>
                                <Text type="secondary">({cart.buyer_rating} rating)</Text>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col span={9} xs={24} sm={24} md={9} lg={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                    <Button icon={<DeleteOutlined />} onClick={() => handleRemoveItem(cart.id)} style={dangerButtonStyle}></Button>
                </Col>
            </Row>
        </section>
    )
}