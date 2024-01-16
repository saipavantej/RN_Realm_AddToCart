import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import type Realm from 'realm';

import {Task} from '../models/Task';
import {TaskItem} from './TaskItem';

type TaskListProps = {
  tasks: Realm.Results<Task>;
  onToggleTaskStatus: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
};

export function TaskList({
  tasks,
  onToggleTaskStatus,
  onDeleteTask,
}: TaskListProps) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        keyExtractor={task => task._id.toString()}
        renderItem={({item: task}) => (
          <TaskItem
            task={task}
            onToggleStatus={onToggleTaskStatus}
            onDelete={onDeleteTask}
          />
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
