import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import {colors} from '../styles/colors';

type AddTaskFormProps = {
  onSubmit: (description: string) => void;
};

export function AddTaskForm({onSubmit}: AddTaskFormProps) {
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onSubmit(description);
    setDescription('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        accessibilityLabel="Enter a task description"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setDescription}
        placeholder="Add a new task"
        placeholderTextColor={colors.grayDark}
        style={styles.textInput}
        value={description}
      />
      <Pressable
        accessibilityLabel="Add task"
        onPress={handleSubmit}
        style={styles.submitButton}>
        <Text style={styles.icon}>＋</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    height: 50,
    marginTop: 25,
    marginBottom: 20,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.grayMedium,
    backgroundColor: colors.white,
    fontSize: 16,
    color: colors.grayDark,
  },
  submitButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.purple,
  },
  icon: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.white,
  },
});
