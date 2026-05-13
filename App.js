import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { AppHeader } from './src/components/AppHeader';
import { SummaryCard } from './src/components/SummaryCard';
import { TaskCard } from './src/components/TaskCard';
import { TaskForm } from './src/components/TaskForm'
import { initialTasks } from './src/data/InitialTasks';


export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const handleCreateTask = ({ title, category }) => {
    const newTask = {
      id: Date.now(),
      title,
      category,
      completed: false,
    }

    setTasks((currentTasks) => [newTask, ...currentTasks])
  }

  const handleToggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <AppHeader />

        <SummaryCard
          total={totalTasks}
          completed={completedTasks}
          pending={pendingTasks}
        />

        <TaskForm onCreateTask={handleCreateTask} />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Tareas registradas</Text>
        </View>

        {tasks.length === 0 ? (
          <Text style={styles.emptyText}>
            Todavía no hay tareas registradas.
          </Text>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={handleToggleTask}
            />
          ))
        )}
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionHeader: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827'
  },
  emptyText: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    color: '#6b7280',
    textAlign: 'center'
  }
});
