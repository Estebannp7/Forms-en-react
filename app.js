import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {useForm, Controller } from 'react-hook-form'; // componentes permiten  la validacion de la informacion de textinput
import { TextInput } from 'react-native-web';

export default function App() {
  //Definir datos del formulario
  const {control, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      fullname:'',
      email:'',
      password:'',
      salary:'',
      age:'',
      dateofbirth:''
    }
  })
//Metodo para capturar la informacion -onSubmit
const onSubmit = data => console.log(data)
  return (
    <View style={styles.container}>
    <Controller  
    control={control}
    rules={{
      required:true,
      pattern:/^[A-Za-zÑñáíó ]+$/i,
      maxLength:30,
      minLength:5
    }}
    render={({field:{onChange,onBlur, value}})=>(
      <TextInput
      style={styles.inputs}
      placeholder="Nombre Completo"
      onChange ={onChange}
      onBlur={onBlur}
      value={value}
      />
    )}
    name="fullname" // estado a validar de la lista defaultvalues
 />
  {errors.fullname?.type == "required" && <Text style={{color:'red'}}>El nombre es obligatorio </Text>}
  {errors.fullname?.type == "pattern" &&  <Text style={{color:'red'}}>El nombre solo debe tener letras y/o espacios</Text>}
  {errors.fullname?.type == "maxLength" && <Text style={{color:'red'}}>El nombre no puede exceder los 20 caracteres</Text>}
  {errors.fullname?.type == "minLength" && <Text style={{color:'red'}}>El nombre debe tener minimo 5 caracteres</Text>}
    
  <Controller  
    control={control}
    rules={{
      required:true,
      pattern:/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
    }}
    render={({field:{onChange,onBlur, value}})=>(
      <TextInput
      style={styles.inputs}
      placeholder="Correo"
      onChange ={onChange}
      onBlur={onBlur}
      value={value}
      />
    )}
    name="email" // estado a validar de la lista defaultvalues
 />
  {errors.email?.type == "required" && <Text style={{color:'red'}}>El Correo es obligatorio </Text>}
  {errors.email?.type == "pattern" &&  <Text style={{color:'red'}}>Ingrese un correo electronico valido</Text>}

  <Controller  
    control={control}
    rules={{
      required:true,
      pattern:/^[0-9]*(\.?)[ 0-9]+$/,
      max:10000000,
      min:2000000
    }}
    render={({field:{onChange,onBlur, value}})=>(
      <TextInput
      style={styles.inputs}
      placeholder="Salario"
      onChange ={onChange}
      onBlur={onBlur}
      value={value}
      />
    )}
    name="salary" // estado a validar de la lista defaultvalues
 />
  {errors.salary?.type == "required" && <Text style={{color:'red'}}>El salario es obligatorio </Text>}
  {errors.salary?.type == "pattern" &&  <Text style={{color:'red'}}>El salario es solo numeros</Text>}
  {errors.salary?.type == "max" &&  <Text style={{color:'red'}}>El salario no puede exceder 10 millones</Text>}
  {errors.salary?.type == "min" &&  <Text style={{color:'red'}}>El salario no puede ser menor a 2 millones</Text>}
  
  <Controller  
    control={control}
    rules={{
      required:true,
      pattern:/^[0-9]*(\.?)[ 0-9]+$/,
      max:35,
      min:18
    }}
    render={({field:{onChange,onBlur, value}})=>(
      <TextInput
      style={styles.inputs}
      placeholder="Edad"
      onChange ={onChange}
      onBlur={onBlur}
      value={value}
      />
    )}
    name="age" // estado a validar de la lista defaultvalues
 />
  {errors.age?.type == "required" && <Text style={{color:'red'}}>La edad es obligatoria </Text>}
  {errors.age?.type == "pattern" &&  <Text style={{color:'red'}}>El edad es solo numeros</Text>}
  {errors.salary?.type == "max" &&  <Text style={{color:'red'}}>La edad no puede ser mas de 35</Text>}
  {errors.salary?.type == "min" &&  <Text style={{color:'red'}}>La edad no puede ser menor de 18</Text>}

  <Controller  
    control={control}
    rules={{
      required:true,
      pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/,
      max:35,
      min:18
    }}
    render={({field:{onChange,onBlur, value}})=>(
      <TextInput
      style={styles.inputs}
      placeholder="Contraseña"
      secureTextEntry ={true}
      onChange ={onChange}
      onBlur={onBlur}
      value={value}
      />
    )}
    name="password" // estado a validar de la lista defaultvalues
 />
  {errors.password?.type == "required" && <Text style={{color:'red'}}>La contraseña es obligatoria </Text>}
  {errors.password?.type == "pattern" &&  <Text style={{color:'red'}}>La contraseña debe entre 8-15 caracteres con almenos un caracter especial, un numero, una  mayuscula</Text>}

  <Controller  
    control={control}
    rules={{
      required:true,
      pattern: /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/,
      
    }}
    render={({field:{onChange,onBlur, value}})=>(
      <TextInput
      style={styles.inputs}
      placeholder="dd/mm/yyyy"
      onChange ={onChange}
      onBlur={onBlur}
      value={value}
      />
    )}
    name="dateofbirth" // estado a validar de la lista defaultvalues
 />
  
  {errors.dateofbirth?.type == "pattern" &&  <Text style={{color:'red'}}>el formato de fecha es dd/mm/yyyy</Text>}
  
  

    
    <TouchableOpacity 
    style={{backgroundColor:'green',padding:10, borderRadius:10,marginTop:20, width:100}}
    onPress={handleSubmit(onSubmit)}
    >

  <Text style ={{color:'white'}}>Enviar</Text>
    </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs:{
    padding:10,
    borderWidth:1,
    borderColor:'green',
    textAlign: 'center',
    borderRadius:10,
    color:'black',
    marginBottom: 5
  }
});
