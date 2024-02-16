import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity,Button } from 'react-native';
import { TextInput } from 'react-native-paper'; // Import from react-native-paper
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure you have this package


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    {/* Header */}
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Sign In</Text>
      <Text style={styles.subHeaderText}>Welcome back! Please enter your details</Text>
    </View>

   
    <View style={styles.inputFieldContainer}>
      {/* Email Field */}
<View style={styles.inputWithIcon}>
  <TextInput
    mode="flat"
    style={styles.input}
    placeholder="quickrakibull@gmail.com"
    left={<TextInput.Icon name="email" />} 
  />
</View>

{/* Password Field */}
<View style={styles.inputWithIcon}>
  <TextInput
    mode="flat"
    style={styles.input}
    placeholder="......."
    secureTextEntry={true}
    left={<TextInput.Icon name="lock" />} 
  />
</View>
     
          {/* Remember Me and Forgot Password */}
          <View style={styles.optionsContainer}>
    <View style={styles.rememberContainer}>
      <Icon name="square-o" size={24} color="#000" />
      <Text style={styles.optionText}>Remember me?</Text>
    </View>
 </View>
 </View> 

    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
    

  {/* Sign In Button */}
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.signInButton}>
      <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
  </View>

  {/* Sign Up */}
  <View style={styles.signUpContainer}>
    <Text style={styles.signUpText}>Create account</Text>
    <TouchableOpacity style={styles.signUpButton}>
      <Button title="SignUp" color="yellow" />
    </TouchableOpacity>
  </View>

  {/* Social Media Icons */}
  <View style={styles.socialLoginContainer}>
    <TouchableOpacity>
      <Icon name="facebook" size={24} color="blue" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name="google" size={24} color="#DB4437" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name="apple" size={24} color="#000" />
    </TouchableOpacity>
  </View>
</SafeAreaView>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  headerContainer: {
    marginBottom: 6,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subHeaderText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
  },
  inputFieldContainer: {
    width: '100%',
    padding: 25,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B1B6A6',
    padding: 10,
    borderRadius: 12,
    marginBottom: 9,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontWeight: 'bold',
  },
  optionsContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row', 
    marginBottom: 20,
  },
  optionText: {
    color: 'black',
    marginLeft: 10,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  padding:20,
  },
  forgotPasswordText: {
    color: "#4056F4",
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 30,
    padding:20,
    
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpText: {
    marginVertical: 5,
  },
  signUpButton: {
    paddingHorizontal: 10, 
    paddingVertical: 5,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '80%',
  },
});