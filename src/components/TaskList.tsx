import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import type Realm from 'realm';
import {TaskItem} from './TaskItem';
import {Items} from '../models/Items';

type TaskListProps = {
  items: Realm.Results<Items>;
  onAddToCart: (item: any) => void;
};

export function TaskList({items, onAddToCart}: TaskListProps) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 20}}
        data={items}
        keyExtractor={item => item._id.toString()}
        renderItem={({item: data}) => (
          <TaskItem item={data} onAdd={onAddToCart} />
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
