import { Pressable, StyleSheet, Text, View } from 'react-native';

export function TaskCard({ task, onToggle }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>

      <Text style={styles.category}>{task.category}</Text>

      <Text style={styles.status}>
        {task.completed ? 'Completada' : 'Pendiente'}
      </Text>

      <Pressable style={styles.button} onPress={() => onToggle(task.id)}>
        <Text style={styles.buttonText}>
          {task.completed ? 'Marcar pendiente' : 'Marcar completada'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  status: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#111827',
    borderRadius: 14,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
  },
});
