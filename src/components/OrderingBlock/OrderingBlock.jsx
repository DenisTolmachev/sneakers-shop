import styles from './OrderingBlock.module.scss';

export const OrderingBlock = () => {
  return (
    <div className={styles.orderingBlock}>
      <div className='flex items-end'>
        <span className={styles.orderingInfo}>Total</span>
        <div className='flex-1 border-b-2 border-dashed mx-2 relative -top-1'></div>
        <span className={styles.orderingValue}>1200 $</span>
      </div>
      <div className='flex items-end'>
        <span className={styles.orderingInfo}>Tax 5%</span>
        <div className='flex-1 border-b-2 border-dashed mx-2 relative -top-1'></div>
        <span className={styles.orderingValue}>60 $</span>
      </div>
      <button>Ordering</button>
    </div>
  );
};