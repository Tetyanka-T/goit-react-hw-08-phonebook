import s from 'components/Container/Container.module.scss';

const Container = ({ children }) => {
  return <section className={s.container}>{children}</section>;
};

export default Container;
