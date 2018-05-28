let age = prompt('¡Bienvenido/a!  a continuación ingrese su edad:')
if (age >=1 && age % 1 == 0) {
  if (age >= 1 && age <= 3)  {
      document.write('Toddler')
} else if(age >= 3 && age <= 5) {
  document.write('Preschooler')
} else if(age >= 5 && age <= 12){
  document.write('Gradeschooler')
} else if(age >= 12 && age <= 18){
  document.write('Teenager')
} else if(age >= 18 && age <= 21){
  document.write('Young-adult')
} else if(age < 30){
  document.write('Adult')
}
} else{
  alert('Error: asegúrese de ingresar un número válido')
}