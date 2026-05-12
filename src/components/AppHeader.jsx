import { StyleSheet, Text, View } from 'react-native';

export function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>Proyecto integrador</Text>

      <Text style={styles.title}>TaskFlow Mobile</Text>

      <Text style={styles.description}>
        Organiza tus actividades desde una app móvil construida con React Native y Expo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563eb',
    marginBottom: 6,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
  },
  description: {
    fontSize: 16,
    color: '#4b5563',
    marginTop: 6,
    lineHeight: 22,
  },
});
