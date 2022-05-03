import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Assets } from 'react-navigation-stack'
import ImagesExample from './logo_image.js'

const Login_screen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <KeyboardAvoidingView
          style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry 
                />
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                    onPress={() => { }}
                    style={styles.button, styles.buttonOutlineText}
                >
                   <Text style={styles.buttonOutlineText }>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}
                    style={styles.button, styles.buttonOutlineText}
                >
                   <Text style={styles.buttonOutlineText}>Créer un compte</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login_screen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',     
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
},
  button: {
      width: '100%',
      padding: 15,
      borderRadius: 10,
      borderColor: '#FF51CF',
      alignItems: 'center',

  },
  buttonOutline: {
      backgroundColor:'white',
      marginTop: 5,
      borderWidth: 2,
      borderColor: '#FF51CF',

  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  
  buttonOutlineText: {
    fontSize: 20,
    paddingTop: 5,
    fontWeight: '700',
    color: '#FF51CF',
  },
  
})