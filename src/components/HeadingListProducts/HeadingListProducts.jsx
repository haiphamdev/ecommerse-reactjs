import CountdownTimer from '@components/CountdownTimer/CountDownTimer';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';

function HeadingListProducts() {
    const { container, containerItem } = styles;
    const targetDate = 'Thu Jun 11 2026 00:01:45 GMT+0700 (Indochina Time)';
    return (
        <MainLayout>
            {/* <CountdownTimer targetDate={targetDate} /> */}
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProducts;
