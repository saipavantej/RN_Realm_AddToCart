import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AddTaskForm} from '../components/AddTaskForm';
import {SwitchPanel} from '../components/SwitchPanel';
import {TaskList} from '../components/TaskList';
import {colors} from '../styles/colors';
import {useTaskManager} from '../hooks/useTaskManager';

type TaskScreenProps = {
  userId?: string;
};

export function TaskScreen({userId}: TaskScreenProps) {
  const {
    tasks,
    addTask,
    toggleTaskStatus,
    deleteTask,
    showCompleted,
    toggleShowCompleted,
  } = useTaskManager(userId);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AddTaskForm onSubmit={addTask} />
        {tasks.length === 0 ? (
          <Text>no Tasks avalible !!</Text>
        ) : (
          <TaskList
            tasks={tasks}
            onToggleTaskStatus={toggleTaskStatus}
            onDeleteTask={deleteTask}
          />
        )}
      </View>
      <SwitchPanel
        label="Show Completed"
        value={showCompleted}
        onValueChange={toggleShowCompleted}
      />
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
    paddingHorizontal: 25,
  },
});
