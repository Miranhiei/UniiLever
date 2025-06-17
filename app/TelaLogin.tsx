import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
<<<<<<< HEAD
=======
import logo from "../assets/images/LogoHydro.png"; 
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346

export default function TelaLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
<<<<<<< HEAD
    if (email === "1234" && senha === "1234") {
=======
    if (email === "admin@hydrotech.com" && senha === "1234") {
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346
      router.replace("/(tabs)/monitoring");
    } else {
      Alert.alert("Erro", "Credenciais inválidas");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
<<<<<<< HEAD
      <View style={styles.card}>
        <Image
          source={require("../assets/images/Unilever.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Bem-vindo ao UniHelp</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
=======
      <Image source={logo} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>Bem-vindo ao HydroTech</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F0FF",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
<<<<<<< HEAD
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    width: "100%",
    maxWidth: 350,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 20,
    resizeMode: "contain",
=======
  logo: {
    width: 160,
    height: 160,
    marginBottom: 20,
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#003366",
<<<<<<< HEAD
    marginBottom: 20,
  },
  input: {
    width: "100%",
=======
    marginBottom: 30,
  },
  input: {
    width: "100%",
    maxWidth: 300,
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
<<<<<<< HEAD
    marginTop: 8,
=======
    marginTop: 12,
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
<<<<<<< HEAD
    fontWeight: "600",
=======
>>>>>>> 3c616b9e2dcf522639db2d89b3e7d7889a2ec346
  },
});
