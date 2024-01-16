import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useAuth, useUser} from '@realm/react';
import {TaskScreen} from './TaskScreen';
import {colors} from '../styles/colors';

export function TaskScreenSync() {
  const user = useUser();
  const {logOut} = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{user?.profile.email}</Text>
        </View>
        <Pressable style={styles.authButton} onPress={logOut}>
          <Text style={styles.authButtonText}>Log Out</Text>
        </Pressable>
      </View>
      <TaskScreen userId={user.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: colors.grayMedium,
    backgroundColor: colors.grayLight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: colors.grayMedium,
    backgroundColor: colors.white,
  },
  titleContainer: {
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderColor: colors.purple,
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grayDark,
  },
  info: {
    fontSize: 13,
    color: colors.grayDark,
  },
  authButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.grayMedium,
  },
  authButtonText: {
    fontWeight: 'bold',
    color: colors.grayDark,
  },
});
