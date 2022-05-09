import Loader from 'react-loader-spinner';
import s from './Loader.module.scss';

export const Spinner = () => {
  return (
    <div className={s.spin}>
      <Loader type="ThreeDots" color="#696969" width="80" height="80" />
    </div>
  );
};
