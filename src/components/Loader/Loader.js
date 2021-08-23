import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export const Spinner = () => {
  return (
    <div className={s.spin}>
      <Loader type="ThreeDots" color="#3f51b5" width="80" height="80" />
    </div>
  );
};
