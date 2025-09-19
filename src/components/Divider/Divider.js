import styles from './Divider.module.scss'

const Divider = ({ title }) => {
    return <div className={styles.Divider}>
        <span>{title}</span>
        <hr />
    </div>
}

export default Divider