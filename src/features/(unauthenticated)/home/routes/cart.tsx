import {
    Breadcrumb,
    Button,
    Col,
    Flex,
    Form,
    Row,
    Typography
} from 'antd';
import { useContext } from 'react';
import { Breadcrumbs } from '../../../../common/breadcrumbs';
import { GeneralContext, GeneralContextType } from '../../../../common/context/GeneralContext';
import { blackButtonFullWidthStyle } from '../../../../utils/style';
import { customThemeColors } from '../../../../utils/theme';
import { formatCurrency } from '../../../../utils/utils';
import CardCartItem from '../components/CardCartItem';

const { Text } = Typography;

export function Cart() {
    const { cartItems, removeFromCart } = useContext(GeneralContext) as GeneralContextType;

    return (
        <Form>
            <h1 style={{ marginTop: "25px", marginBottom: "10px" }}>Cart</h1>
            <Breadcrumb style={{ marginBottom: 20 }} items={Breadcrumbs.HomePage.Cart} />

            <Row gutter={[16, 16]}>
                <Col span={16} xs={24} sm={24} lg={16}>
                    <Row gutter={[16, 16]}>
                        {cartItems.length > 0 ? cartItems.map((items) =>
                            <Col span={24}>
                                <CardCartItem cart={items} handleRemoveItem={removeFromCart} />
                            </Col>
                        ) : <Col span={24}>
                            <section style={{ backgroundColor: customThemeColors.neutral[20], borderRadius: '10px', padding: 20 }}>
                                <Flex align='center' justify='center'>
                                    <p>Keranjang kamu kosong nih...! yuk pilih batik yang kamu suka.</p>
                                </Flex>
                            </section>
                        </Col>}
                    </Row>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <section style={{ backgroundColor: customThemeColors.neutral[20], borderRadius: '10px', padding: 20 }}>
                        <h2>Cart Detail</h2>
                        <Row gutter={[0, 10]} style={{ margin: "20px 0" }}>
                            <Col span={24}>
                                <Flex align='center' justify='space-between'>
                                    <Text type="secondary">Sub Total: </Text>
                                    <Text strong>{cartItems.length > 0 && formatCurrency(200000)}</Text>
                                </Flex>
                            </Col>
                            <Col span={24}>
                                <Flex align='center' justify='space-between'>
                                    <Text type="secondary">Shipping: </Text>
                                    <Text strong>{cartItems.length > 0 && formatCurrency(10000)}</Text>
                                </Flex>
                            </Col>
                            <Col span={24}>
                                <Flex align='center' justify='space-between'>
                                    <Text type="secondary">Total: </Text>
                                    <Text strong>{cartItems.length > 0 && formatCurrency(210000)}</Text>
                                </Flex>
                            </Col>
                        </Row>
                        <Button disabled={cartItems.length < 0} type='default' style={blackButtonFullWidthStyle}>
                            Make Payment
                        </Button>
                    </section>
                </Col>
            </Row>
        </Form>
    );
}
