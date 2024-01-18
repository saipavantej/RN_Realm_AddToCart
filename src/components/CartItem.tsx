import React, {memo} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {colors} from '../styles/colors';
import {Cart} from '../models/Cart';
type TaskItemProps = {
  item: Cart;
  onRemove: (item: any) => void;
};

export const CartItem = memo<TaskItemProps>(({item, onRemove}) => {
  return (
    <View style={[styles.task]}>
      <Image
        source={{uri: item.image_url}}
        style={{height: 80, width: 80, resizeMode: 'contain'}}
      />
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={1} style={[styles.description]}>
          {item.name}
        </Text>
        <Text numberOfLines={1} style={[styles.description]}>
          {`₹${item.price}`}
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={1} style={[styles.description]}>
          {item.quantity}
        </Text>
      </View>
      <Pressable onPress={() => onRemove(item)} style={styles.addButton}>
        <Text style={styles.addIcon}>-</Text>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.grayMedium,
    backgroundColor: colors.white,
  },
  taskCompleted: {
    borderColor: colors.purple,
    backgroundColor: colors.purple,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    paddingHorizontal: 10,
    fontSize: 15,
    color: colors.grayDark,
  },
  descriptionCompleted: {
    color: colors.white,
  },
  status: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    borderRadius: 5,
    borderRightWidth: 1,
    borderColor: colors.grayMedium,
    backgroundColor: colors.white,
  },
  statusCompleted: {
    borderColor: colors.purple,
  },
  statusIcon: {
    textAlign: 'center',
    fontSize: 17,
    color: colors.purple,
  },
  addButton: {
    width: 30,
    height: 30,
    marginRight: 10,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 30,
    borderColor: colors.white,
    backgroundColor: colors.red,
  },

  addIcon: {
    marginTop: -2,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    color: colors.white,
  },
});
