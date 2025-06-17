import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width - 40;

export default function RelatorioScreen() {
  const [equipamento, setEquipamento] = useState('AGV-001');
  const [periodo, setPeriodo] = useState('Mensal');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerBox}>
        <Ionicons name="bar-chart-outline" size={26} color="#005BAC" />
        <Text style={styles.title}>Relatórios</Text>
      </View>

      {/* Filtros */}
      <View style={styles.filters}>
        <View style={styles.filterItem}>
          <View style={styles.labelWithIcon}>
            <MaterialIcons name="precision-manufacturing" size={16} color="#555" />
            <Text style={styles.filterLabel}> Equipamento</Text>
          </View>
          <Picker
            selectedValue={equipamento}
            onValueChange={(itemValue) => setEquipamento(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="AGV-001" value="AGV-001" />
            <Picker.Item label="AGV-002" value="AGV-002" />
            <Picker.Item label="Esteira-01" value="Esteira-01" />
            <Picker.Item label="Esteira-02" value="Esteira-02" />
          </Picker>
        </View>

        <View style={styles.filterItem}>
          <View style={styles.labelWithIcon}>
            <Ionicons name="calendar-outline" size={16} color="#555" />
            <Text style={styles.filterLabel}> Período</Text>
          </View>
          <Picker
            selectedValue={periodo}
            onValueChange={(itemValue) => setPeriodo(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Diário" value="Diário" />
            <Picker.Item label="Mensal" value="Mensal" />
            <Picker.Item label="Anual" value="Anual" />
          </Picker>
        </View>
      </View>

      {/* Cards de informação */}
      <View style={styles.infoCards}>
        <View style={[styles.infoCard, { backgroundColor: '#D1FADF' }]}>
          <Text style={styles.infoLabel}>Eficiência Total</Text>
          <Text style={styles.infoValue}>15.2%</Text>
        </View>
        <View style={[styles.infoCard, { backgroundColor: '#DBEAFE' }]}>
          <Text style={styles.infoLabel}>Consumo Atual</Text>
          <Text style={styles.infoValue}>284 kWh</Text>
        </View>
      </View>

      {/* Gráfico de Consumo Diário */}
      <Text style={styles.sectionTitle}>📊 Consumo Diário</Text>
      <LineChart
        data={{
          labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
          datasets: [{ data: [20, 45, 28, 80, 99, 43, 50] }],
        }}
        width={screenWidth}
        height={220}
        yAxisSuffix=" kWh"
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 91, 172, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#005BAC',
          },
        }}
        bezier
        style={styles.chart}
      />

      {/* Gráfico de Consumo por Equipamento */}
      <Text style={styles.sectionTitle}>📈 Consumo por Equipamento</Text>
      <BarChart
        data={{
          labels: ['AGV-001', 'AGV-002', 'Esteira-01', 'Esteira-02'],
          datasets: [{ data: [320, 450, 300, 280] }],
        }}
        width={screenWidth}
        height={220}
        yAxisSuffix=" kWh"
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 91, 172, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
        }}
        style={styles.chart} yAxisLabel={''}      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f7fb',
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 20,
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#005BAC',
  },
  filters: {
    flexDirection: 'row',
    gap: 10,
  },
  labelWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterItem: {
    flex: 1,
  },
  filterLabel: {
    fontSize: 12,
    color: '#555',
    marginBottom: 4,
  },
  picker: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  infoCards: {
    flexDirection: 'row',
    gap: 10,
  },
  infoCard: {
    flex: 1,
    borderRadius: 10,
    padding: 16,
    justifyContent: 'center',
  },
  infoLabel: {
    fontSize: 12,
    color: '#555',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#003366',
    marginTop: 10,
  },
  chart: {
    borderRadius: 8,
  },
});
