import Realm, {BSON} from 'realm';

export class Items extends Realm.Object {
  _id: BSON.ObjectId = new BSON.ObjectId();
  name!: string;
  price!: number;
  image_url!: string;

  static primaryKey = '_id';
}
