//Ejercicios JS

//1  Crear una condicional que verifique que la edad sea mayor o igual a 18, en caso de ser asi decir por consola "es mayor de edad" sino decir "es menor de edad" 

/* let edad = 12

if(edad >= 18){
    console.log('Es mayor de edad')}
else{
    console.log('Es menor de edad')
}
 */




//2 Crear un programa que solicite al usuario un precio, eso guardarlo en una variable. Si el precio es inferior a 3000 entonces decir por consola "es barato", si el precio es superior a 3000 decir por consola es caro

/* let precio = Number(prompt('Ingrese Precio'))

if( precio < 3000){
    console.log('Es barato')
}
else{
    console.log('Es caro')
}
 */




//3 Solicitar al usuario 3 números y verificar cuál es el mayor de los 3 (nos muestra el numero mayor por consola)

/* let numero1 = Number(prompt('Ingrese el primer Numero'))

let numero2 = Number(prompt('Ingrese el segundo Numero'))

let numero3 = Number(prompt('Ingrese el tercer Numero'))

if(numero1 > numero2 && numero1 > numero3){
    console.log(numero1)
}

else if(numero2 > numero1 && numero2 > numero3){
    console.log(numero2)
}

else {(numero3 > numero2 && numero3 > numero1)
    console.log(numero3)
}
 */




//4 Verificamos si el número es positivo, negativo o cero (nos dira por consola a que categoria pertenece)

/* let numero = Number(prompt('Ingrese un numero'))

if(numero > 0){
    console.log('El numero es positivo')
}
else if(numero == 0){
    console.log('El numero es Cero')
}
else{(numero < 0)
    console.log('El numero es negativo')
} */



//5) Verificamos si la edad está en el rango de 18 a 65 años, si se cumple la condicion, se dira por consola Esta en edad laborable */

/* let edad = (Number(prompt('Ingrese edad')))

if(edad >= 18 && edad <= 65){
    console.log('Esta en edad laborable')
}
else{(edad <= 17 && edad >=66)
console.log('No esta en edad laborable')
} */