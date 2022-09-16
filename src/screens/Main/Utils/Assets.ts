import { Products } from './Model';
import  DataCards from '../component/Cards/Utils/cards';

export const Assets = Products
    .map((product) => product.picture )
    .concat( DataCards.map((card) => card.picture ));