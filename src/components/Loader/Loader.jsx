import { InfinitySpin } from 'react-loader-spinner';
import { LoderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoderWrapper>
      <InfinitySpin width="200" color=" #c49dbf" />
    </LoderWrapper>
  );
};

export default Loader;
