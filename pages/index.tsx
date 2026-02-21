import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function ProfilePage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>

     <Image 
          source={{ uri: 'https://avatars.githubusercontent.com/u/187463744?s=400&v=4' }} 
          style={styles.profileImage} 
        />

        <View style={styles.nameContainer}>
          <Text style={styles.fullName}>Paulo Henrique Roncoleta Vieira</Text>
          <Text style={styles.username}>PauloRoncoleta  he/him</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.statusInput}>
        <Text style={styles.statusText}>Definir seu status</Text>
      </TouchableOpacity>

      <Text style={styles.bio}>
        Tester | ADS | Faculdade UMFG 
      </Text>

      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Arus</Text>
        </View>

         <View style={styles.infoRow}>
          <Text style={styles.infoText}>www.umfg.edu.br</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoText}>pauloronco2020@gmail.com</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoText}>roncoleta_paulo</Text>
        </View>

         <View style={styles.infoRow}>
          <Text style={styles.infoText}>#bemlegal</Text>
        </View>

      </View>

      <View style={styles.followRow}>
        <Text style={styles.followText}>
          <Text style={styles.boldText}>1</Text> seguidores <Text style={styles.boldText}>3</Text> seguindo
        </Text>
      </View>

      <View style={styles.separator} />
      
      <Text style={styles.readmeTitle}>PauloRoncoleta / ReadMe.md</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117', 
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  nameContainer: {
    marginLeft: 15,
    flexShrink: 1,
  },

    separator: {
    height: 1,
    backgroundColor: '#30363d',
    marginBottom: 20,
  },

  fullName: {
    color: '#f0f6fc',
    fontSize: 22,
    fontWeight: 'bold',
  },
  username: {
    color: '#8b949e',
    fontSize: 16,
  },
  statusInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
  },
  statusText: {
    color: '#8b949e',
    marginLeft: 10,
  },
  bio: {
    color: '#f0f6fc',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  infoSection: {
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    color: '#f0f6fc',
    marginLeft: 10,
    fontSize: 14,
  },
  
  followRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  followText: {
    color: '#8b949e',
    marginLeft: 10,
  },
  boldText: {
    color: '#f0f6fc',
    fontWeight: 'bold',
  },
  badgeRow: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  badgeCircle: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 8,
  },

  readmeTitle: {
    color: '#f0f6fc',
    fontSize: 14,
    fontWeight: '500',
  },

    profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#30363d',
  }
});