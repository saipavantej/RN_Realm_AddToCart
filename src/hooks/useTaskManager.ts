import {useCallback, useState} from 'react';
import {useQuery, useRealm} from '@realm/react';

import {Task} from '../models/Task';

export function useTaskManager(userId = 'SYNC_DISABLED') {
  const realm = useRealm();
  const [showCompleted, setShowCompleted] = useState(true);
  const tasks = useQuery(
    Task,
    collection =>
      showCompleted
        ? collection.sorted('createdAt')
        : collection.filtered('isComplete == false').sorted('createdAt'),
    [showCompleted],
  );

  const addTask = useCallback(
    (description: string) => {
      if (!description) {
        return;
      }
      realm.write(() => {
        realm.create(Task, {description, userId});
      });
    },
    [realm, userId],
  );

  const toggleTaskStatus = useCallback(
    (task: Task) => {
      realm.write(() => {
        task.isComplete = !task.isComplete;
      });
    },
    [realm],
  );

  const deleteTask = useCallback(
    (task: Task) => {
      realm.write(() => {
        realm.delete(task);
      });
    },
    [realm],
  );

  const toggleShowCompleted = useCallback(() => {
    setShowCompleted(!showCompleted);
  }, [showCompleted]);

  return {
    tasks,
    addTask,
    toggleTaskStatus,
    deleteTask,
    showCompleted,
    toggleShowCompleted,
  };
}
