import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({label, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#0066ff',
        padding: 18,
        borderRadius: 8,
        marginBottom: 15,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 18,
          color: 'white',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}