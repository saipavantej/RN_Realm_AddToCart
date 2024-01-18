import {useCallback} from 'react';
import {useQuery, useRealm} from '@realm/react';
import {Items} from '../models/Items';
import {Cart} from '../models/Cart';

export function useTaskManager(user_id = 'SYNC_DISABLED') {
  const realm = useRealm();

  const items = useQuery(Items);

  const addToCart = useCallback(
    (data: any) => {
      realm.write(() => {
        realm.create(Cart, {
          user_id,
          name: data.name,
          price: data.price,
          image_url: data.image_url,
        });
      });
    },
    [realm, user_id],
  );

  const cart = useQuery(Cart, collection =>
    collection.filtered('user_id == $0', user_id),
  );

  const removeFromCart = useCallback(
    (item: Cart) => {
      realm.write(() => {
        const taskToDelete = realm.objectForPrimaryKey('Cart', item._id);
        if (taskToDelete) {
          realm.delete(taskToDelete);
        }
      });
    },
    [realm],
  );

  return {
    items,
    cart,
    addToCart,
    removeFromCart,
  };
}
