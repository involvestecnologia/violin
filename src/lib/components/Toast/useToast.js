import { useContext } from 'react';
import ToastContext from './context';

const useToast = () => {
  const context = useContext(ToastContext);

  return { add: context.add, remove: context.remove };
}

export default useToast;
