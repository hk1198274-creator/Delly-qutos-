import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
  const [isHindi, setIsHindi] = useState(false);

  const quotes = {
    en: {
      title: "Daily Motivation",
      current: "The best way to get started is to quit talking and begin doing. - Walt Disney",
      toggle: "हिंदी में बदलें"
    },
    hi: {
      title: "दैनिक प्रेरणा",
      current: "शुरू करने का सबसे अच्छा तरीका है कि आप बात करना बंद करें और काम करना शुरू करें। - वाल्ट डिज़नी",
      toggle: "Switch to English"
    }
  };

  const currentLang = isHindi ? quotes.hi : quotes.en;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{currentLang.title}</Text>
        <TouchableOpacity 
          style={styles.toggleButton} 
          onPress={() => setIsHindi(!isHindi)}
        >
          <Text style={styles.toggleText}>{currentLang.toggle}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.quoteText}>{currentLang.current}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  toggleButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  toggleText: {
    color: '#fff',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  quoteText: {
    fontSize: 18,
    color: '#444',
    lineHeight: 26,
  },
});
