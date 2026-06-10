import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import Info from '@components/Info/Info';
import styles from './styles.module.scss';
import AdvanceHealing from '@components/AdvanceHealing/AdvanceHealing';
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts';

function HomePage() {
    const { container } = styles;

    return (
        <div className={container}>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHealing />
            <HeadingListProducts />
        </div>
    );
}

export default HomePage;
