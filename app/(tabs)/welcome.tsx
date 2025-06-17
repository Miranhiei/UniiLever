<<<<<<< HEAD
import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require("../../assets/images/Unilever.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Bem-vindo ao UniHelp</Text>

        <Text style={styles.subtitle}>🚚 Operação Inteligente de Logística</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🔍 Sobre o UniHelp</Text>
          <Text style={styles.description}>
            O <Text style={styles.bold}>UniHelp</Text> foi desenvolvido para
            otimizar operações logísticas internas, com monitoramento em tempo real
            de AGVs, esteiras e entregas. O sistema oferece{" "}
            <Text style={styles.bold}>eficiência, segurança</Text> e{" "}
            <Text style={styles.bold}>controle operacional</Text>.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>⚙️ Funcionalidades</Text>
          <Text style={styles.listItem}>• Monitoramento em tempo real</Text>
          <Text style={styles.listItem}>• Gestão de AGVs e esteiras</Text>
          <Text style={styles.listItem}>• Controle de coletas e entregas</Text>
          <Text style={styles.listItem}>• Alertas operacionais inteligentes</Text>
          <Text style={styles.listItem}>• Relatórios de eficiência e consumo</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🧠 Tecnologias Integradas</Text>
          <Text style={styles.listItem}>• IoT — Sensores inteligentes</Text>
          <Text style={styles.listItem}>• APIs meteorológicas</Text>
          <Text style={styles.listItem}>• Análise de dados</Text>
          <Text style={styles.listItem}>• Microcontroladores ESP32 & AGVs</Text>
          <Text style={styles.listItem}>• Plataforma web/mobile (Expo + React Native)</Text>
        </View>

        <Text style={styles.info}>
          🔒 Dados seguros e operacionais.{" "}
          <Text style={{ fontWeight: "bold" }}>
            Supervisionado por Unilever | FIAP | Engenharia Mecatrônica
          </Text>
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(tabs)/relatorio")}
        >
          <Text style={styles.buttonText}>Acessar Operação</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f7fd",
  },
  content: {
    alignItems: "center",
    padding: 24,
    gap: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 12,
    resizeMode: "contain",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#003366",
  },
  subtitle: {
    fontSize: 16,
    color: "#005BAC",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    width: "100%",
    shadowColor: "#000",
    elevation: 2,
    gap: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#003366",
  },
  description: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
    textAlign: "justify",
  },
  listItem: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  info: {
    fontSize: 13,
    color: "#0077b6",
    textAlign: "center",
  },
  bold: {
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#005BAC",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
=======
import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require("../../assets/images/LogoHydro.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Bem-vindo ao HydroTech</Text>

        <Text style={styles.subtitle}>
          🌧️ Monitoramento Inteligente de Enchentes
        </Text>

        <Text style={styles.description}>
          Este aplicativo foi desenvolvido para oferecer suporte a comunidades
          vulneráveis a alagamentos urbanos. Utilizando sensores em tempo real e
          inteligência climática, o sistema monitora níveis de água, intensidade
          de chuvas e emite alertas preventivos.
        </Text>

        <Text style={styles.description}>
          A HydroTech integra sensores, microcontroladores, APIs meteorológicas
          e inteligência de dados para garantir respostas rápidas, eficazes e
          seguras.
        </Text>

        <Text style={styles.info}>
          🔒 Seus dados estão seguros.{" "}
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            FIAP | Engenharia Mecatronica{" "}
          </Text>
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("../(tabs)/monitoring")}
        >
          <Text style={styles.buttonText}>Começar Monitoramento</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf0fa",
  },
  content: {
    alignItems: "center",
    padding: 24,
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 16,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#336699",
    fontWeight: "600",
    marginBottom: 20,
  },
  description: {
    textAlign: "justify",
    fontSize: 14,
    color: "#333",
    marginBottom: 16,
    lineHeight: 22,
  },
  info: {
    fontSize: 13,
    color: "#0077b6",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#005f99",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346
