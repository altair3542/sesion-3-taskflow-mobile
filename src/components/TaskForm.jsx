import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export function TaskForm({ onCreateTask }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const cleanTitle = title.trim();
    const cleanCategory = category.trim();

    if (!cleanTitle) {
      setError('El título de la tarea es obligatorio.');
      return;
    }

    onCreateTask({
      title: cleanTitle,
      category: cleanCategory || 'General',
    });

    setTitle('');
    setCategory('');
    setError('');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Nueva tarea</Text>

      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Ej: Leer documentación de Expo"
      />

      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="Categoría: Curso, Personal, Trabajo..."
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Agregar tarea</Text>
      </Pressable>
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
    marginBottom: 12,
    color: '#111827',
  },
  input: {
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 10,
  },
  error: {
    color: '#b91c1c',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 15,
  },
});
