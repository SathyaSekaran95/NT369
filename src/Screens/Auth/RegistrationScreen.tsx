import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

interface FormData {
  mobileNumber: string;
  name: string;
  gstNumber: string;
  companyAddress: string;
  email: string;
  mpin: string;
}

const Registration = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState<FormData>({
    mobileNumber: '',
    name: '',
    gstNumber: '',
    companyAddress: '',
    email: '',
    mpin: '',
  });

  const handleSubmit = () => {
    // Validate form data
    if (!formData.mobileNumber || !formData.name || !formData.companyAddress || !formData.email || !formData.mpin) {
      // Show error message
      return;
    }
    // Navigate to verification screen
    navigation.navigate('Verification');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      
      <View style={styles.header}>
        <Text style={styles.title}>Create an account</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Input
          label="Mobile Number"
          required
          value={formData.mobileNumber}
          onChangeText={(text) => setFormData({ ...formData, mobileNumber: text })}
          keyboardType="phone-pad"
          placeholder="Enter Your Mobile Number"
        />

        <Input
          label="Your Name"
          required
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
          placeholder="Enter Your Name"
        />

        <Input
          label="Your GST/Company Register No"
          value={formData.gstNumber}
          onChangeText={(text) => setFormData({ ...formData, gstNumber: text })}
          placeholder="Enter Number"
        />

        <Input
          label="Company Address"
          required
          value={formData.companyAddress}
          onChangeText={(text) => setFormData({ ...formData, companyAddress: text })}
          placeholder="Enter Address"
        />

        <Input
          label="Email Address"
          required
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          keyboardType="email-address"
          placeholder="Enter Email"
        />

        <Input
          label="MPIN"
          required
          value={formData.mpin}
          onChangeText={(text) => setFormData({ ...formData, mpin: text })}
          placeholder="Enter Your New MPIN"
          isSecure
        />
      </ScrollView>

      <View style={styles.buttonContainer}>
      
        <Button
          title="Submit"
          onPress={handleSubmit}
          buttonStyle={styles.submitButton}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already Have an Account </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  backButton: {
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 20,
  },
  header: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  submitButton: {
    marginTop: 0,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },
  footerText: {
    color: '#666',
  },
  signInText: {
    color: '#0086C9',
    fontWeight: '600',
  },
});

export default Registration;
