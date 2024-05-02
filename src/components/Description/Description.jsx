import css from './Description.module.css';

export default function Description() {
  return (
    <div className={css.descr_container}>
      <h1 className={css.descr_title}>
        <span className={css.greenyellow}>Sip</span> Happens Café
      </h1>
      <p className={css.descr_text}>
        Happens Café Please leave your feedback{' '}
        <span className={css.plum}>about</span> our service{' '}
        <span className={css.plum}>by</span> selecting one{' '}
        <span className={css.plum}>of the</span> options{' '}
        <span className={css.plum}>below</span>.
      </p>
    </div>
  );
}
