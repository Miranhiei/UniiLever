import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007BFF',
<<<<<<< HEAD
        tabBarInactiveTintColor: '#7a7a7a',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: 65,
          borderTopWidth: 0.5,
          borderTopColor: '#ccc',
=======
        tabBarInactiveTintColor: '#003366',
        tabBarStyle: {
          backgroundColor: '#E8F0FF',
          height: 60,
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="welcome"
        options={{
          title: 'Início',
<<<<<<< HEAD
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
=======
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346
        }}
      />
      <Tabs.Screen
        name="monitoring"
        options={{
<<<<<<< HEAD
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="speedometer-outline" color={color} size={size} />
          ),
=======
          title: 'Monitoramento',
          tabBarIcon: ({ color, size }) => <Ionicons name="speedometer-outline" color={color} size={size} />,
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
<<<<<<< HEAD
          title: 'Agendamento',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" color={color} size={size} />
          ),
=======
          title: 'Alertas',
          tabBarIcon: ({ color, size }) => <Ionicons name="alert-circle-outline" color={color} size={size} />,
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346
        }}
      />
      <Tabs.Screen
        name="action-control"
        options={{
<<<<<<< HEAD
          title: 'Relatórios',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
=======
          title: 'Controle',
          tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" color={color} size={size} />,
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
<<<<<<< HEAD
          title: 'Acompanhamento',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" color={color} size={size} />
          ),
=======
          title: 'Histórico',
          tabBarIcon: ({ color, size }) => <Ionicons name="time-outline" color={color} size={size} />,
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346
        }}
      />
    </Tabs>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346
