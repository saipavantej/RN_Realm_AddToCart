import React, {useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {AuthOperationName, useEmailPasswordAuth} from '@realm/react';
import {colors} from '../styles/colors';

export function LoginScreen() {
  const {logIn, register, result} = useEmailPasswordAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hadError =
    result.error?.operation === AuthOperationName.LogIn ||
    result.error?.operation === AuthOperationName.Register;

  useEffect(() => {
    if (result.success && result.operation === AuthOperationName.Register) {
      logIn({email, password});
    }
  }, [result, logIn, email, password]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Atlas Device SDK for React Native</Text>
        <View style={styles.form}>
          <TextInput
            accessibilityLabel="Enter email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor={colors.grayDark}
            style={styles.input}
            textContentType="emailAddress"
            value={email}
          />
          <TextInput
            accessibilityLabel="Enter password"
            autoComplete="password"
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor={colors.grayDark}
            secureTextEntry
            style={styles.input}
            textContentType="password"
            value={password}
          />
          {hadError && (
            <Text style={styles.error}>{result.error?.message}</Text>
          )}
          <View style={styles.buttons}>
            <Pressable
              disabled={result.pending}
              onPress={() => logIn({email, password})}
              style={[styles.button, result.pending && styles.disabled]}>
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
            <Pressable
              disabled={result.pending}
              onPress={() => register({email, password})}
              style={[styles.button, result.pending && styles.disabled]}>
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.grayLight,
  },
  logo: {
    height: 150,
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    marginBottom: 50,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
  },
  form: {
    width: '85%',
    paddingHorizontal: 30,
    paddingVertical: 40,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.grayMedium,
    backgroundColor: colors.white,
  },
  input: {
    alignSelf: 'stretch',
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.grayMedium,
    backgroundColor: colors.grayLight,
    fontSize: 16,
    color: colors.grayDark,
  },
  error: {
    marginTop: 10,
    textAlign: 'center',
    color: colors.grayDark,
  },
  buttons: {
    marginTop: 100,
    flexDirection: 'row',
  },
  button: {
    width: 120,
    marginHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 25,
    backgroundColor: colors.purple,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.white,
  },
  disabled: {
    opacity: 0.8,
  },
});
