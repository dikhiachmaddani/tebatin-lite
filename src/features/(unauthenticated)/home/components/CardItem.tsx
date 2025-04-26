import { ShoppingCartOutlined, StarFilled } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { useContext } from "react";
import { GeneralContext, GeneralContextType } from "../../../../common/context/GeneralContext";
import { Product } from "../../../../modules/product/type";
import { backgroundCoverStyle, blackButtonFullWidthStyle } from "../../../../utils/style";
import { customThemeColors } from "../../../../utils/theme";
import { formatCurrency } from "../../../../utils/utils";

const { Text } = Typography;

type ICardItemProps = {
    product: Product;
}

export default function CardItem({ product }: ICardItemProps) {
    const { addToCart } = useContext(GeneralContext) as GeneralContextType;

    const handleAddToCart = () => {
        addToCart({ ...product, quantity: 1 });
    };

    return (
        <div style={{ backgroundColor: customThemeColors.neutral[20], borderRadius: '10px', padding: 20 }}>
            <div style={{ borderRadius: '10px', overflow: 'hidden', position: 'relative', width: '100%', height: '250px', marginBottom: 10 }}>
                <img src={product.img} alt={product.title} style={backgroundCoverStyle} />
            </div>
            <h2>{product.title}</h2>
            <Row gutter={30} style={{ margin: '10px 0' }}>
                <Col style={{ padding: 0 }}>
                    <Text type="secondary">Terjual </Text>
                    <Text strong>{product.sold}</Text>
                </Col>
                <Col>
                    <Text strong><StarFilled /> </Text>
                    <Text strong>{product.rating} </Text>
                    <Text type="secondary">({product.buyer_rating} rating)</Text>
                </Col>
            </Row>
            <h3>{formatCurrency(product.price)}</h3>
            <Row style={{ width: '100%', marginTop: 15 }}>
                <Col span={18} style={{ paddingRight: 10 }}>
                    <Button href={`detail/${product.id}`} style={blackButtonFullWidthStyle}>Detail</Button>
                </Col>
                <Col span={6}>
                    <Button icon={<ShoppingCartOutlined />} style={blackButtonFullWidthStyle} onClick={handleAddToCart}></Button>
                </Col>
            </Row>
        </div>
    )
}