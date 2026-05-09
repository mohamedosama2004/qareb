import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.brandRow}>
        <View style={styles.logoWrap}>
          <View style={styles.logoInner} />
        </View>
        <Text style={styles.brandText}>قريب</Text>
      </View>
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Ionicons name="search-outline" size={24} color="#64748b" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoWrap: {
    backgroundColor: '#e0f2f1',
    padding: 8,
    borderRadius: 12,
  },
  logoInner: {
    width: 16,
    height: 16,
    backgroundColor: '#004d40',
    borderRadius: 4,
    transform: [{ rotate: '45deg' }],
  },
  brandText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#004d40',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
  },
});

export default Header;
