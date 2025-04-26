import {
    Carousel,
    Col,
    Row
} from 'antd';
import CardItem from '../components/CardItem';
import CarouselItem from '../components/CarouselItem';
import { useGetListProduct } from '../hooks/use-list-product.hook';

export function Home() {
    const { data } = useGetListProduct();
    return (
        <section>
            <Carousel dotPosition={"right"} autoplay speed={0.1} style={{ marginTop: 20 }}>
                <CarouselItem img={"/assets/banner/canting.webp"} alt={"banner-1"} description={"Dibuat dengan sepenuh hati di setiap motif lukisan."} />
                <CarouselItem img={"/assets/sand-background.jpg"} alt={"banner-2"} description={"Menenun Kebudayaan, Menghubungkan Pelanggan."} />
            </Carousel>
            <section>
                <h1 style={{ margin: "50px 0", fontSize: 25 }}>Temukan Batik<br />Yang Kamu Suka</h1>
            </section>
            <section>
                <Row gutter={[16, 16]}>
                    {data && data.data.product.map((product) =>
                        <Col span={6} xs={24} sm={24} md={12} lg={6}>
                            <CardItem product={product} />
                        </Col>
                    )}
                </Row>
            </section>
        </section>
    );
}
