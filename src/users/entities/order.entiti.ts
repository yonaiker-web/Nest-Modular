import { Product } from 'src/products/entities/product.entity';
import { User } from './user.entity';

//creamos la entidad de ordenes
export class Order {
  date: Date;
  //creamos una entidad user del tipo de datos y estructura de la entidad User
  user: User;
  products: Product[];
}
