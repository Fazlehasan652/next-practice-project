import Cartprovider from "../contexts/Cart";

const CartProviderWrapper = ({ children }) => {
  return <Cartprovider>{children}</Cartprovider>;
};

export default CartProviderWrapper;
