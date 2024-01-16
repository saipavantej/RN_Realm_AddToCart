import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

import {colors} from '../styles/colors';

type SwitchPanelProps = {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export function SwitchPanel({label, value, onValueChange}: SwitchPanelProps) {
  return (
    <View style={styles.panel}>
      <Text style={styles.label}>{label}</Text>
      <Switch onValueChange={onValueChange} value={value} />
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: colors.grayMedium,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grayDark,
  },
});
