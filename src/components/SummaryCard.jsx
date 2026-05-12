import { StyleSheet, Text, View } from 'react-native';

export function SummaryCard({ total, completed, pending }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Resumen</Text>

      <Text style={styles.item}>Total: {total}</Text>
      <Text style={styles.item}>Completadas: {completed}</Text>
      <Text style={styles.item}>Pendientes: {pending}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
    color: '#111827',
  },
  item: {
    fontSize: 15,
    color: '#374151',
    marginBottom: 4,
  },
});
