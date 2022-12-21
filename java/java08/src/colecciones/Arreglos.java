package colecciones;

import java.util.Arrays;

public class Arreglos {

	public static void main(String[] args) {
			//Arrays - Arreglos - Matrices
			//Solo Permiten un tipo de dato
			//Se tiene que especificar su tamaño
				
				/*
				 * String
				 * int
				 * Double
				 * long
				 */
		
		String [] miArreglo = new String[6];
		
		miArreglo[0] = "Adrian";
		miArreglo[1] = "Raul";
		miArreglo[2] = "Alonso";
		miArreglo[3] = "Fernanda";
		miArreglo[4] = "Victor";
		miArreglo[5] = "Juan";
	
	System.out.println("Aqui se llama a todo el arreglo" + miArreglo);
	
	//for
	
		for(int i=0; i<miArreglo.length; i++) {
		System.out.println("ciclo for " + miArreglo[i]);
		}
	
		//forEach (se declara variable dentro de for y se enlaza al arreglo
		for(String nombre : miArreglo) {
			System.out.println("for Each: " + nombre);
		}
		
		//Math.pow(2, 2);
		//Arrays
		
		System.out.println(Arrays.toString(miArreglo));
		
		//Tipos de Valores
		int numeros[] = new int[5];
		
			numeros[0]= 3;
			numeros[1]= -56;
			numeros[2]= (int) 3.45;//Casteo == cambiar a otro tipo de valor
			numeros[3]= Integer.parseInt("2"); // parseo == cambiar clase de valor
			
			for(int numero : numeros) {
				System.out.println("valores del arreglo numeros: " + numero);
			}
			
			//Areglo de objetos
			persona persona1 = new persona("Pancho", 30);
			persona persona2 = new persona("Juancho", 31);
			
			//
			persona [] arrPersona = new persona[3];
			arrPersona[0] = persona1;
			arrPersona[1] = persona2;
			arrPersona[2] = new persona("Luis", 18);
			System.out.println(arrPersona[0].nombre);
			System.out.println(arrPersona[1].nombre);
			System.out.println(arrPersona[2].nombre);
			
			for(persona Persona : arrPersona) {
				System.out.println("Nombre: " + Persona.nombre + "edad: " + Persona.edad);
			}
			
			//Arreglos literales
			String[] arrString = {"manzana", "Pera", "12", "Hola"};
			System.out.println(Arrays.toString(arrString));
	}
	
}
	

