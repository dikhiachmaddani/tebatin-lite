import { ShoppingCartOutlined, StarFilled } from '@ant-design/icons';
import {
    Breadcrumb,
    Button,
    Col,
    Row,
    Typography
} from 'antd';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../../../common/breadcrumbs';
import { GeneralContext, GeneralContextType } from '../../../../common/context/GeneralContext';
import { backgroundCoverStyle, blackButtonFullWidthStyle } from '../../../../utils/style';
import { customThemeColors } from '../../../../utils/theme';
import { formatCurrency } from '../../../../utils/utils';
import { NotFound } from '../../../not-found';
import { DetailPageSkeleton } from '../components/DetailPageSkeleton';
import { useGetListProduct } from '../hooks/use-list-product.hook';

const { Paragraph, Text } = Typography;

export function DetailHome() {
    const { id } = useParams();
    const { data, isLoading } = useGetListProduct();
    const product = data?.data.product.find((product) => product.id === id);
    if (isLoading) return <DetailPageSkeleton />;
    if (!product) return <NotFound />;
    const { addToCart } = useContext(GeneralContext) as GeneralContextType;

    const handleAddToCart = () => {
        addToCart({ ...product, quantity: 1 });
    };
    return (
        <section>
            <Breadcrumb style={{ marginBottom: 20 }} items={Breadcrumbs.HomePage.Detail} />
            <Row gutter={30}>
                <Col span={15} xs={24} sm={24} md={15} lg={15}>
                    <div style={{ borderRadius: '10px', overflow: 'hidden', position: 'relative', width: '100%', height: '500px', marginBottom: 10 }}>
                        <img src={product.img} alt={product.title} style={backgroundCoverStyle} />
                    </div>
                </Col>
                <Col span={9} xs={24} sm={24} md={9} lg={9}>
                    <section style={{ backgroundColor: customThemeColors.neutral[20], borderRadius: '10px', padding: 20 }}>
                        <h1>{product.title}</h1>

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

                        <h2>{formatCurrency(product.price)}</h2>

                        <Paragraph style={{ marginTop: 10 }}>{product.description}</Paragraph>
                        <Row style={{ width: '100%' }}>
                            <Col span={24}>
                                <Button onClick={handleAddToCart} icon={<ShoppingCartOutlined />} style={blackButtonFullWidthStyle}>
                                    Add to Cart
                                </Button>
                            </Col>
                        </Row>

                        <div style={{ marginTop: 5 }}>
                            <Text type="secondary">Stok: </Text>
                            <Text strong>{product.stock}</Text>
                        </div>
                    </section>
                </Col>
            </Row>
        </section>
    );
}
