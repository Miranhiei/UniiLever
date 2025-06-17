import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

export default function ScheduleScreen() {
  const [origem, setOrigem] = useState<string | null>(null);
  const [destino, setDestino] = useState<string | null>(null);
  const [tipoCarga, setTipoCarga] = useState<string | null>(null);
  const [horario, setHorario] = useState<string | null>(null);

  const handleAgendar = () => {
    alert("Agendamento realizado com sucesso!");
    setOrigem(null);
    setDestino(null);
    setTipoCarga(null);
    setHorario(null);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerBox}>
        <Ionicons name="calendar-outline" size={28} color="#003366" />
        <Text style={styles.title}>Agendamento de Coletas</Text>
      </View>

      <View style={styles.formBox}>
        <Text style={styles.label}>Origem</Text>
        <Picker
          selectedValue={origem}
          onValueChange={(value) => setOrigem(value)}
        >
          <Picker.Item label="Selecione a Origem" value={null} />
          <Picker.Item label="São Paulo" value="São Paulo" />
          <Picker.Item label="Curitiba" value="Curitiba" />
          <Picker.Item label="Campinas" value="Campinas" />
        </Picker>

        <Text style={styles.label}>Destino</Text>
        <Picker
          selectedValue={destino}
          onValueChange={(value) => setDestino(value)}
        >
          <Picker.Item label="Selecione o Destino" value={null} />
          <Picker.Item label="Curitiba" value="Curitiba" />
          <Picker.Item label="São Paulo" value="São Paulo" />
          <Picker.Item label="Joinville" value="Joinville" />
        </Picker>

        <Text style={styles.label}>Tipo de Carga</Text>
        <Picker
          selectedValue={tipoCarga}
          onValueChange={(value) => setTipoCarga(value)}
        >
          <Picker.Item label="Selecione o Tipo de Carga" value={null} />
          <Picker.Item label="Alimentos" value="Alimentos" />
          <Picker.Item label="Químicos" value="Químicos" />
          <Picker.Item label="Materiais" value="Materiais" />
        </Picker>

        <Text style={styles.label}>Horário</Text>
        <Picker
          selectedValue={horario}
          onValueChange={(value) => setHorario(value)}
        >
          <Picker.Item label="Selecione o Horário" value={null} />
          <Picker.Item label="08:00" value="08:00" />
          <Picker.Item label="14:00" value="14:00" />
          <Picker.Item label="20:00" value="20:00" />
        </Picker>

        <TouchableOpacity style={styles.button} onPress={handleAgendar}>
          <Text style={styles.buttonText}>Confirmar Agendamento</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Agendamentos Futuros</Text>

      <View style={styles.agendaItem}>
        <Text>🗓️ 15 Mai, 2025 • São Paulo → Curitiba</Text>
        <Text style={styles.statusConfirmado}>Confirmado</Text>
      </View>
      <View style={styles.agendaItem}>
        <Text>🗓️ 22 Mai, 2025 • Porto Feliz → João Pessoa</Text>
        <Text style={styles.statusPendente}>Pendente</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#edf4fc",
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 16,
  },
  headerBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#003366",
  },
  formBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    gap: 10,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginTop: 8,
  },
  button: {
    backgroundColor: "#001FAD",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  agendaItem: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
    marginBottom: 8,
  },
  statusConfirmado: {
    backgroundColor: "#D1FADF",
    color: "#065F46",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "600",
  },
  statusPendente: {
    backgroundColor: "#FEF9C3",
    color: "#92400E",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "600",
  },
});
