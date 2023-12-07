import { Image } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import styles from '../pages/drugstore/drugstore.module.css';

interface Image {
    src: string;
    alt: string;
    caption: string;
  }
  
  interface MyCarouselProps {
    images: Image[];
  }

const MyCarousel: React.FC<MyCarouselProps> = ({ images }) => {
  return (
    <div>
        <Carousel className={styles.carousel}>
        {images.map((image, index) => (
            <div className={styles.carouselItem} key={index}>
                <Image src={image.src} alt={image.alt} width={100} height={80}/>
            </div>
        ))}
        </Carousel>
    </div>
  );
};

export default MyCarousel;