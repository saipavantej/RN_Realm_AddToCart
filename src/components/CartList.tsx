import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {CartItem} from './CartItem';
import {useTaskManager} from '../hooks/useTaskManager';

type TaskListProps = {
  userId?: string;
};

export function CartList({userId}: TaskListProps) {
  const {cart, removeFromCart} = useTaskManager(userId);
  return (
    <View style={styles.listContainer}>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 20}}
        data={cart}
        keyExtractor={item => item._id.toString()}
        renderItem={({item: data}) => (
          <CartItem item={data} onRemove={removeFromCart} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});
