import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TaskList} from '../components/TaskList';
import {colors} from '../styles/colors';
import {useTaskManager} from '../hooks/useTaskManager';

type TaskScreenProps = {
  userId?: string;
};

export function TaskScreen({userId}: TaskScreenProps) {
  const {items, addToCart} = useTaskManager(userId);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {items.length === 0 ? (
          <Text>no items avalible !!</Text>
        ) : (
          <TaskList items={items} onAddToCart={addToCart} />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayLight,
  },
  content: {
    flex: 1,
  },
});
