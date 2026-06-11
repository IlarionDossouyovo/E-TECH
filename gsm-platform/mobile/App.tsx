/**
 * E-Tech Nexus AI - Mobile App
 * React Native for Android & iOS
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native';

// Types
interface DiagnosticResult {
  device_model: string;
  overall_health: string;
  battery_health: number;
  screen_status: string;
  camera_status: string;
  network_status: string;
  detected_issues: Array<{ component: string; issue: string; estimated_cost: number }>;
  recommendations: string[];
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  icon: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

// API
const API_URL = 'http://10.0.2.2:3001'; // Android emulator localhost

// Header
const Header = ({ title }: { title: string }) => (
  <SafeAreaView style={styles.header}>
    <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
    <View style={styles.headerContent}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>E-Tech</Text>
        <Text style={styles.logoNexus}>Nexus</Text>
        <Text style={styles.logoAI}>AI</Text>
      </View>
    </View>
  </SafeAreaView>
);

// Diagnostic Screen
const DiagnosticScreen = () => {
  const [deviceModel, setDeviceModel] = useState('');
  const [imei, setImei] = useState('');
  const [issues, setIssues] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const deviceModels = [
    'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15',
    'Samsung Galaxy S24 Ultra', 'Samsung Galaxy S24',
    'Google Pixel 8 Pro', 'Google Pixel 8',
  ];

  const issueOptions = [
    { id: 'battery', label: '🔋 Batterie' },
    { id: 'ecran', label: '📱 Écran' },
    { id: 'camera', label: '📷 Caméra' },
    { id: 'reseau', label: '📶 Réseau' },
  ];

  const toggleIssue = (id: string) => {
    setIssues(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const runDiagnostic = async () => {
    if (!deviceModel) {
      Alert.alert('Erreur', 'Veuillez sélectionner un modèle');
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`${API_URL}/api/diagnostic`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          device_model: deviceModel,
          imei: imei || 'N/A',
          issues: issues,
        }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      Alert.alert('Erreur', 'Serveur inaccessible');
    } finally {
      setLoading(false);
    }
  };

  const totalCost = result?.detected_issues.reduce((sum, i) => sum + i.estimated_cost, 0) || 0;

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>🔍 Diagnostic IA</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Modèle</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.modelScroll}>
            {deviceModels.map(model => (
              <TouchableOpacity
                key={model}
                style={[styles.modelChip, deviceModel === model && styles.modelChipActive]}
                onPress={() => setDeviceModel(model)}
              >
                <Text style={[styles.modelText, deviceModel === model && styles.modelTextActive]}>
                  {model}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.label}>IMEI</Text>
          <TextInput
            style={styles.input}
            value={imei}
            onChangeText={setImei}
            placeholder="123456789012345"
            keyboardType="numeric"
            placeholderTextColor="#666"
          />

          <Text style={styles.label}>Problèmes</Text>
          <View style={styles.issuesContainer}>
            {issueOptions.map(issue => (
              <TouchableOpacity
                key={issue.id}
                style={[styles.issueChip, issues.includes(issue.id) && styles.issueChipActive]}
                onPress={() => toggleIssue(issue.id)}
              >
                <Text style={[styles.issueText, issues.includes(issue.id) && styles.issueTextActive]}>
                  {issue.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={runDiagnostic}
            disabled={loading}
          >
            {loading ? <ActivityIndicator color="#0A0A0A" /> : <Text style={styles.buttonText}>🚀 Analyser</Text>}
          </TouchableOpacity>
        </View>

        {result && (
          <View style={styles.resultCard}>
            <View style={styles.resultHeader}>
              <Text style={styles.resultTitle}>{result.device_model}</Text>
              <View style={[styles.healthBadge, result.overall_health === 'Excellent' ? styles.healthOK : styles.healthWarn]}>
                <Text style={styles.healthText}>{result.overall_health}</Text>
              </View>
            </View>

            <View style={styles.componentGrid}>
              <View style={styles.componentItem}>
                <Text style={styles.componentIcon}>🔋</Text>
                <Text style={styles.componentLabel}>Batterie</Text>
                <Text style={[styles.componentStatus, result.battery_health > 70 ? styles.statusOK : styles.statusWarn]}>
                  {result.battery_health}%
                </Text>
              </View>
              <View style={styles.componentItem}>
                <Text style={styles.componentIcon}>📱</Text>
                <Text style={styles.componentLabel}>Écran</Text>
                <Text style={[styles.componentStatus, result.screen_status === 'OK' ? styles.statusOK : styles.statusWarn]}>
                  {result.screen_status}
                </Text>
              </View>
              <View style={styles.componentItem}>
                <Text style={styles.componentIcon}>📷</Text>
                <Text style={styles.componentLabel}>Caméra</Text>
                <Text style={[styles.componentStatus, result.camera_status === 'OK' ? styles.statusOK : styles.statusWarn]}>
                  {result.camera_status}
                </Text>
              </View>
              <View style={styles.componentItem}>
                <Text style={styles.componentIcon}>📶</Text>
                <Text style={styles.componentLabel}>Réseau</Text>
                <Text style={[styles.componentStatus, result.network_status === 'OK' ? styles.statusOK : styles.statusWarn]}>
                  {result.network_status}
                </Text>
              </View>
            </View>

            {result.detected_issues.length > 0 && (
              <View style={styles.issuesList}>
                <Text style={styles.sectionTitle}>Problèmes détectés</Text>
                {result.detected_issues.map((issue, i) => (
                  <View key={i} style={styles.issueRow}>
                    <Text style={styles.issueName}>{issue.component}</Text>
                    <Text style={styles.issueCost}>${issue.estimated_cost}</Text>
                  </View>
                ))}
                <Text style={styles.totalCost}>Total: ${totalCost}</Text>
              </View>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

// Marketplace Screen
const MarketplaceScreen = ({ addToCart }: { addToCart: (p: Product) => void }) => {
  const products: Product[] = [
    { id: 1, name: 'Écran iPhone 15 Pro', category: 'ecran', price: 89, stock: 15, icon: '📱' },
    { id: 2, name: 'Écran Samsung S24', category: 'ecran', price: 129, stock: 8, icon: '📱' },
    { id: 3, name: 'Batterie iPhone 15', category: 'batterie', price: 35, stock: 45, icon: '🔋' },
    { id: 4, name: 'Batterie iPhone 14', category: 'batterie', price: 30, stock: 50, icon: '🔋' },
    { id: 5, name: 'Caméra iPhone 15', category: 'camera', price: 45, stock: 18, icon: '📷' },
    { id: 6, name: 'Chargeur 20W', category: 'chargeur', price: 15, stock: 100, icon: '⚡' },
  ];

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>🛒 Boutique</Text>
        <View style={styles.productsGrid}>
          {products.map(p => (
            <View key={p.id} style={styles.productCard}>
              <Text style={styles.productIcon}>{p.icon}</Text>
              <Text style={styles.productName}>{p.name}</Text>
              <Text style={styles.productPrice}>${p.price}</Text>
              <TouchableOpacity style={styles.addButton} onPress={() => addToCart(p)}>
                <Text style={styles.addButtonText}>Ajouter</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

// Cart Screen
const CartScreen = ({ cart, removeFromCart }: { cart: CartItem[]; removeFromCart: (i: number) => void }) => {
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>🛒 Panier ({cart.length})</Text>
        {cart.length === 0 ? (
          <Text style={styles.emptyText}>Panier vide</Text>
        ) : (
          <>
            {cart.map((item, i) => (
              <View key={i} style={styles.cartRow}>
                <Text>{item.product.icon} {item.product.name}</Text>
                <Text>${item.product.price}</Text>
                <TouchableOpacity onPress={() => removeFromCart(i)}><Text>✕</Text></TouchableOpacity>
              </View>
            ))}
            <Text style={styles.totalAmount}>Total: ${total}</Text>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Commander</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

// Main App
export default function App() {
  const [screen, setScreen] = useState<'diagnostic' | 'marketplace' | 'cart'>('diagnostic');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, { product, quantity: 1 }]);
    Alert.alert('Succès', 'Ajouté au panier');
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.app}>
      <Header title="E-Tech Nexus AI" />
      {screen === 'diagnostic' && <DiagnosticScreen />}
      {screen === 'marketplace' && <MarketplaceScreen addToCart={addToCart} />}
      {screen === 'cart' && <CartScreen cart={cart} removeFromCart={removeFromCart} />}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => setScreen('diagnostic')}>
          <Text style={styles.tabIcon}>🔍</Text>
          <Text style={[styles.tabText, screen === 'diagnostic' && styles.tabActive]}>Diagnostic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => setScreen('marketplace')}>
          <Text style={styles.tabIcon}>🛒</Text>
          <Text style={[styles.tabText, screen === 'marketplace' && styles.tabActive]}>Boutique</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => setScreen('cart')}>
          <Text style={styles.tabIcon}>🛒</Text>
          <Text style={[styles.tabText, screen === 'cart' && styles.tabActive]}>Panier ({cart.length})</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: '#0A0A0A' },
  header: { backgroundColor: '#0A0A0A', borderBottomWidth: 1, borderBottomColor: '#333' },
  headerContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 16 },
  logoContainer: { flexDirection: 'row' },
  logoText: { color: '#FFF', fontSize: 20, fontWeight: '700' },
  logoNexus: { color: '#00D4FF', fontSize: 20, fontWeight: '700' },
  logoAI: { color: '#888', fontSize: 20, fontWeight: '700' },
  screen: { flex: 1, backgroundColor: '#0A0A0A' },
  container: { padding: 16 },
  screenTitle: { fontSize: 24, fontWeight: '700', color: '#FFF', marginBottom: 20, textAlign: 'center' },
  form: { backgroundColor: '#111', borderRadius: 16, padding: 16, marginBottom: 20 },
  label: { color: '#888', fontSize: 14, marginBottom: 8, marginTop: 12 },
  input: { backgroundColor: '#0A0A0A', borderRadius: 12, padding: 14, color: '#FFF', borderWidth: 1, borderColor: '#333' },
  modelScroll: { marginBottom: 12 },
  modelChip: { paddingHorizontal: 16, paddingVertical: 10, backgroundColor: '#0A0A0A', borderRadius: 20, marginRight: 8 },
  modelChipActive: { backgroundColor: '#00D4FF' },
  modelText: { color: '#888' },
  modelTextActive: { color: '#0A0A0A', fontWeight: '600' },
  issuesContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 },
  issueChip: { paddingHorizontal: 14, paddingVertical: 8, backgroundColor: '#0A0A0A', borderRadius: 16, marginRight: 8, marginBottom: 8 },
  issueChipActive: { backgroundColor: '#00D4FF' },
  issueText: { color: '#888' },
  issueTextActive: { color: '#0A0A0A', fontWeight: '600' },
  button: { backgroundColor: '#00D4FF', borderRadius: 12, padding: 16, alignItems: 'center' },
  buttonDisabled: { opacity: 0.5 },
  buttonText: { color: '#0A0A0A', fontSize: 16, fontWeight: '600' },
  resultCard: { backgroundColor: '#111', borderRadius: 16, padding: 16 },
  resultHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  resultTitle: { color: '#FFF', fontSize: 18, fontWeight: '600' },
  healthBadge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  healthOK: { backgroundColor: 'rgba(16,185,129,0.2)' },
  healthWarn: { backgroundColor: 'rgba(245,158,11,0.2)' },
  healthText: { color: '#FFF', fontSize: 12 },
  componentGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  componentItem: { width: '48%', backgroundColor: '#0A0A0A', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 12 },
  componentIcon: { fontSize: 24 },
  componentLabel: { color: '#888', fontSize: 12, marginTop: 4 },
  componentStatus: { fontSize: 14, fontWeight: '600', marginTop: 4 },
  statusOK: { color: '#10B981' },
  statusWarn: { color: '#F59E0B' },
  issuesList: { marginTop: 16, backgroundColor: '#0A0A0A', padding: 12, borderRadius: 12 },
  sectionTitle: { color: '#00D4FF', fontWeight: '600', marginBottom: 12 },
  issueRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#222' },
  issueName: { color: '#FFF' },
  issueCost: { color: '#00D4FF', fontWeight: '600' },
  totalCost: { fontSize: 20, fontWeight: '700', color: '#00D4FF', textAlign: 'center', marginTop: 12 },
  productsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  productCard: { width: '48%', backgroundColor: '#111', borderRadius: 16, padding: 16, marginBottom: 16, alignItems: 'center' },
  productIcon: { fontSize: 32, marginBottom: 8 },
  productName: { color: '#FFF', fontSize: 14, textAlign: 'center', marginBottom: 8 },
  productPrice: { color: '#10B981', fontSize: 18, fontWeight: '700', marginBottom: 12 },
  addButton: { backgroundColor: '#00D4FF', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 },
  addButtonText: { color: '#0A0A0A', fontWeight: '600' },
  emptyText: { color: '#888', textAlign: 'center', padding: 40 },
  cartRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#111', padding: 16, borderRadius: 12, marginBottom: 12 },
  totalAmount: { fontSize: 24, fontWeight: '700', color: '#00D4FF', textAlign: 'center', marginVertical: 16 },
  checkoutButton: { backgroundColor: '#00D4FF', padding: 16, borderRadius: 12, alignItems: 'center' },
  checkoutText: { color: '#0A0A0A', fontSize: 16, fontWeight: '600' },
  tabBar: { flexDirection: 'row', backgroundColor: '#111', borderTopWidth: 1, borderTopColor: '#333', paddingBottom: 20 },
  tabItem: { flex: 1, alignItems: 'center', paddingVertical: 12 },
  tabIcon: { fontSize: 20 },
  tabText: { color: '#888', fontSize: 12, marginTop: 4 },
  tabActive: { color: '#00D4FF' },
});