import { api } from '../services/api';
import { toast } from 'react-toastify';
import { NftProps } from '../types';
import { createContext, ReactNode, useContext, useState } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: NftProps[];
  addNft: (nftId: number) => Promise<void>;
  removeNft: (nftId: number) => void;
  setCart: (nftList: NftProps[]) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<NftProps[]>([]);

  const addNft = async (nftId: number) => {
    try {
      const updatedCart = [...cart];
      
        const nft = await api.get(`/nfts/${nftId}`);

        const newNft = {
          ...nft.data,
          onWallet: true
        }

        updatedCart.push(newNft);

      localStorage.setItem('@CryptoStore:cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    } catch {
      toast.error('Erro na adição da NFT à carteira.');
    }
  };

  const removeNft = async (nftId: number) => {
    try {
      const updatedCart = [...cart];
      const nftIndex = updatedCart.findIndex(nft => nft.id === nftId);

      console.log(nftIndex);

      if (nftIndex >= 0) {
        updatedCart.splice(nftIndex, 1);
        setCart(updatedCart);
        localStorage.setItem('@CryptoStore:cart', JSON.stringify(updatedCart));

        if(updatedCart.length == 0) {
          toast.info('Sua carteira está vazia.')
        }
      } else {
        throw new Error()
      }

    } catch {
      toast.error('Erro na remoção da NFT.');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addNft, removeNft, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
