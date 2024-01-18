import Realm, {BSON, Types} from 'realm';

export class Cart extends Realm.Object {
  _id: BSON.ObjectId = new BSON.ObjectId();
  user_id!: string;
  name!: string;
  quantity: Types.Int = 1;
  price!: number;
  image_url!: string;

  static primaryKey = '_id';
}
