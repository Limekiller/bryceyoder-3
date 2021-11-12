import styles from './GiftBox.module.scss';

export default function Footer(props) {
    return (
        <div className={styles.giftBoxContainer}>
            <div className={styles.giftBox}>
                <div className={`${styles.giftBoxSideFront} ${styles.giftBoxSide}`} />
                <div className={`${styles.giftBoxSideBack} ${styles.giftBoxSide}`} />
                <div className={`${styles.giftBoxSideLeft} ${styles.giftBoxSide}`} />
                <div className={`${styles.giftBoxSideRight} ${styles.giftBoxSide}`} />
                <div className={`${styles.giftBoxSideTop} ${styles.giftBoxEnd}`} />
                <div className={`${styles.giftBoxSideBottom} ${styles.giftBoxEnd}`} />

                <div className={`${styles.giftBoxLidFront} ${styles.giftBoxLidSide}`} />
                <div className={`${styles.giftBoxLidBack} ${styles.giftBoxLidSide}`} />
                <div className={`${styles.giftBoxLidLeft} ${styles.giftBoxLidSide}`} />
                <div className={`${styles.giftBoxLidRight} ${styles.giftBoxLidSide}`} />
                <div className={`${styles.giftBoxLidTop} ${styles.giftBoxLidEnd}`} />
            </div>
            <img className={styles.image} src={props.link.replace(/'/g, '')} />
        </div>
    )
}