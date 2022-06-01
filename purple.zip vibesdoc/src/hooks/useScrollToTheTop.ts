import { useEffect } from 'react';

const useScrollToTheTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
export default useScrollToTheTop;
