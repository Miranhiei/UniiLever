<<<<<<< HEAD
import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function MonitoringScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>🚚 Dashboard Operações</Text>

      <View style={styles.statusContainer}>
        <View style={[styles.statusCard, { backgroundColor: "#D1FADF" }]}>
          <Text style={styles.statusNumber}>12</Text>
          <Text style={styles.statusLabel}>Ativos</Text>
        </View>
        <View style={[styles.statusCard, { backgroundColor: "#FEF9C3" }]}>
          <Text style={styles.statusNumber}>3</Text>
          <Text style={styles.statusLabel}>Parados</Text>
        </View>
        <View style={[styles.statusCard, { backgroundColor: "#FECACA" }]}>
          <Text style={styles.statusNumber}>1</Text>
          <Text style={styles.statusLabel}>Manutenção</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)/alerts")} // 
      >
        <Text style={styles.buttonText}>Novo Agendamento</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Status AGVs</Text>
      <View style={styles.cardItem}>
        <Text>AGV-001 • Rota 1</Text>
        <View style={styles.statusDotActive} />
      </View>
      <View style={styles.cardItem}>
        <Text>AGV-002 • Rota 2</Text>
        <View style={styles.statusDotInactive} />
      </View>

      <Text style={styles.sectionTitle}>Status Esteiras</Text>
      <View style={styles.cardItem}>
        <Text>Esteira-001 • Linha A</Text>
        <View style={styles.statusDotActive} />
      </View>
      <View style={styles.cardItem}>
        <Text>Esteira-002 • Linha B</Text>
        <View style={styles.statusDotInactive} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#eaf2fb", flex: 1 },
  content: { padding: 20, gap: 12 },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 10,
    textAlign: "center",
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statusCard: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  statusNumber: { fontSize: 24, fontWeight: "bold", color: "#000" },
  statusLabel: { fontSize: 14, color: "#555" },
  button: {
    backgroundColor: "#001FAD",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  cardItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },
  statusDotActive: {
    width: 12,
    height: 12,
    backgroundColor: "#22C55E",
    borderRadius: 6,
  },
  statusDotInactive: {
    width: 12,
    height: 12,
    backgroundColor: "#F87171",
    borderRadius: 6,
  },
});
=======
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import estados from "../../assets/dados/estados.json";
import cidades from "../../assets/dados/cidades.json";

interface Estado {
  id: number;
  nome: string;
  sigla: string;
}

interface Cidade {
  id: number;
  nome: string;
  estadoSigla: string;
}

export default function MonitoringScreen() {
  const [dadosClimaticos, setDadosClimaticos] = useState<any>(null);
  const [carregando, setCarregando] = useState(false);

  const [estadoSelecionado, setEstadoSelecionado] = useState<string | null>(null);
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string | null>(null);

  const [listaEstados, setListaEstados] = useState(
    estados.map((estado: Estado) => ({
      label: estado.nome,
      value: estado.sigla,
    }))
  );

  const [listaCidades, setListaCidades] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    if (estadoSelecionado) {
      const cidadesFiltradas = (cidades as Cidade[])
        .filter((c) => c.estadoSigla === estadoSelecionado)
        .map((c) => ({
          label: c.nome,
          value: c.nome,
        }));
      setListaCidades(cidadesFiltradas);
    }
  }, [estadoSelecionado]);

  useEffect(() => {
    if (cidadeSelecionada) {
      setCarregando(true);
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=ed36d9e6e48e41188f302212250506&q=${cidadeSelecionada},BR&lang=pt`
      )
        .then((res) => res.json())
        .then((data) => {
          setDadosClimaticos(data);
          setCarregando(false);
        })
        .catch((error) => {
          console.error("Erro ao obter dados do clima:", error);
          setCarregando(false);
        });
    }
  }, [cidadeSelecionada]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>🌍 Monitoramento em Tempo Real</Text>

      <View style={styles.box}>
        <Text style={styles.label}>Estado:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={estadoSelecionado}
            onValueChange={(value) => setEstadoSelecionado(value)}
            style={styles.picker}
          >
            <Picker.Item label="Selecione um estado..." value={null} />
            {listaEstados.map((estado) => (
              <Picker.Item
                key={estado.value}
                label={estado.label}
                value={estado.value}
              />
            ))}
          </Picker>
        </View>
      </View>

      {estadoSelecionado && (
        <View style={styles.box}>
          <Text style={styles.label}>Cidade:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={cidadeSelecionada}
              onValueChange={(value) => setCidadeSelecionada(value)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione uma cidade..." value={null} />
              {listaCidades.map((cidade) => (
                <Picker.Item
                  key={cidade.value}
                  label={cidade.label}
                  value={cidade.value}
                />
              ))}
            </Picker>
          </View>
        </View>
      )}

      {carregando && (
        <ActivityIndicator size="large" color="#2b6cb0" style={{ marginTop: 20 }} />
      )}

      {dadosClimaticos && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            📍 {dadosClimaticos.location.name}, {dadosClimaticos.location.region}
          </Text>
          <Text style={styles.data}>🌡️ Temperatura: {dadosClimaticos.current.temp_c}°C</Text>
          <Text style={styles.data}>💧 Umidade: {dadosClimaticos.current.humidity}%</Text>
          <Text style={styles.data}>🌧️ Precipitação: {dadosClimaticos.current.precip_mm} mm</Text>
          <Text style={styles.data}>💨 Vento: {dadosClimaticos.current.wind_kph} km/h</Text>
          <Text style={styles.data}>📝 Condição: {dadosClimaticos.current.condition.text}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f4f8",
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2b6cb0",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    color: "#2d3748",
  },
  box: {
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 12,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#cbd5e0",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f7fafc",
  },
  picker: {
    height: 48,
    width: "100%",
    color: "#2d3748",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 14,
    elevation: 4,
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 12,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#2b6cb0",
    marginBottom: 10,
  },
  data: {
    fontSize: 14,
    marginVertical: 2,
    color: "#4a5568",
  },
});
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346
