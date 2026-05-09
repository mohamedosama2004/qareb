import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BottomNav = () => {
  return (
    <View style={styles.container}>
      {[
        { icon: 'home-outline', label: 'الرئيسية' },
        { icon: 'compass-outline', label: 'الدروس' },
        { icon: 'calendar-outline', label: 'الجدول' },
        { icon: 'information-circle-outline', label: 'عن المنصة' },
      ].map((item) => (
        <View key={item.label} style={styles.item}>
          <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={20} color="#94a3b8" />
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingVertical: 10,
  },
  item: {
    alignItems: 'center',
    gap: 4,
  },
  label: {
    fontSize: 11,
    color: '#94a3b8',
    fontWeight: '600',
  },
});

export default BottomNav;
