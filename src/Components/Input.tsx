import React from 'react';
import {
  View,
  TextInput as RNTextInput,
  Text,
  StyleSheet,
  TextInputProps as RNTextInputProps,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface TextInputProps extends RNTextInputProps {
  label?: string;
  error?: string;
  required?: boolean;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: ViewStyle;
  errorStyle?: TextStyle;
  isSecure?: boolean;
  forgotOption?: string;
  onForgot?: () => void;
}

const Input: React.FC<TextInputProps> = ({
  label,
  error,
  required,
  containerStyle,
  labelStyle,
  inputStyle,
  errorStyle,
  isSecure,
  forgotOption,
  onForgot,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[
          styles.label,
          labelStyle,
          isFocused && styles.focusedLabel,
          error && styles.errorLabel,
        ]}>
          {label}{required && <Text style={styles.required}> *</Text>}
        </Text>
      )}
      <View style={styles.inputContainer}>
        {label === "Mobile Number" && (
          <View style={styles.prefixContainer}>
            <Text style={styles.prefixText}>+91</Text>
          </View>
        )}
        <RNTextInput
          style={[
            styles.input,
            inputStyle,
            isFocused && styles.focusedInput,
            error && styles.inputError,
            label === "Mobile Number" && styles.inputWithPrefix,
          ]}
          placeholderTextColor="#9EA0A4"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={isSecure && !showPassword}
          {...props}
        />
        {isSecure && (
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon
              name={showPassword ? 'visibility' : 'visibility-off'}
              size={20}
              color="#667085"
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.bottomContainer}>
        {error && (
          <Text style={[styles.errorText, errorStyle]}>
            {error}
          </Text>
        )}
        {forgotOption && (
          <TouchableOpacity onPress={onForgot}>
            <Text style={styles.forgotText}>{forgotOption}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: '#667085',
    marginBottom: 6,
  },
  focusedLabel: {
    color: '#0086C9',
  },
  errorLabel: {
    color: '#FF4D4F',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    flex: 1,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#D0D5DD',
    paddingHorizontal: 0,
    fontSize: 14,
    color: '#333333',
    backgroundColor: 'transparent',
  },
  focusedInput: {
    borderBottomColor: '#0086C9',
  },
  inputError: {
    borderBottomColor: '#FF4D4F',
  },
  errorText: {
    color: '#FF4D4F',
    fontSize: 12,
    flex: 1,
  },
  required: {
    color: '#FF4D4F',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    height: 44,
    justifyContent: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 8,
  },
  forgotText: {
    color: '#0086C9',
    fontSize: 12,
    fontWeight: '400',
  },
  prefixContainer: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  prefixText: {
    color: '#000',
    fontSize: 14,
  },
  inputWithPrefix: {
    paddingLeft: 45,
  },
});

export default Input;