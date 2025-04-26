import { backgroundCoverStyle, coverStyle } from "../../../../utils/style";

interface ICarouselItemsProps {
    img: string;
    alt?: string;
    description: string;
}
export default function CarouselItem({ img, alt, description }: ICarouselItemsProps) {
    return (
        <div>
            <div style={{ borderRadius: '20px', overflow: 'hidden', position: 'relative', height: '500px' }}>
                <img src={img} alt={alt} style={backgroundCoverStyle} />
                <div style={coverStyle}></div>
                <p style={{ position: 'absolute', zIndex: 2, bottom: 30, left: 30, color: '#fff', fontSize: 40, fontWeight: "bold" }}>
                    {description}
                </p>
            </div>
        </div>
    )
}