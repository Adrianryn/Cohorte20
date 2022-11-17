package variables;

public class tipoVariables {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Tipos primitivos numericos (enteros).. byte, short, int, long(no son clases)
		byte numeroB = 127;
		System.out.println("tamaño de un byte " + Byte.SIZE);
		System.out.println("valor maximo " + Byte.MAX_VALUE);
		System.out.println("el valor minimo es: " + Byte.MIN_VALUE);
		
		int entero =5;
		System.out.println("tamaño de un entero " + Integer.BYTES);
		System.out.println("tamaño de un entero " + Integer.SIZE);
		System.out.println("valor maximo " + Integer.MAX_VALUE);
		System.out.println("valor minimo " + Integer.MIN_VALUE);
		
		short peque = 10;
		System.out.println("---SHORT---");
		System.out.println("tamaño de un short " + Short.BYTES);
		System.out.println("tamaño de un short " + Short.SIZE);
		System.out.println("valor maximo " + Short.MAX_VALUE);
		System.out.println("valor minimo " + Short.MIN_VALUE);
		
		
		System.out.println("---LONG---");
		System.out.println("tamaño de un long " + Long.BYTES);
		System.out.println("tamaño de un long " + Long.SIZE);
		System.out.println("valor maximo " + Long.MAX_VALUE);
		System.out.println("valor minimo " + Long.MIN_VALUE);
		
		var num = 32767;
		System.out.println(" esta es la variable con var " + num);
		
		var sistemaNumerico = 012;
		System.out.println(": " + sistemaNumerico);
		
		System.out.println("---PRIMITIVOS FLOAT, DOUBLE---");
		System.out.println("valor maximo " + Float.MAX_VALUE);
		System.out.println("valor minimo " + Float.MIN_VALUE);
		System.out.println("valor maximo " + Double.MAX_VALUE);
		System.out.println("valor minimo " + Double.MIN_VALUE);
		
		var comaF = 100.10F;
		System.out.println("valor de variable coma flotante: " + comaF);
		
		System.out.println("---Boolean---");
		boolean estado = false;
				System.out.println("---->:" + estado);
				System.out.println("valor maximo " + Boolean.FALSE);
				System.out.println("valor minimo " + Boolean.TRUE);
				
				if(estado) {
					System.out.println("soy verdadero");
				}else {
					System.out.println("Soy falso");
				}
				
				var edad = 20;
				boolean adulto = edad >=10;
						
				
				if (adulto){
					System.out.println("---> varBool si edad es mayor a e10 es> " + edad);
				} else {
					System.out.println("---> varBool la edad es menor a >" + edad);
				}
						
						System.out.println("-----------char-----------");
						char caracter = '\u058E';
						System.out.println("---> " + caracter);
				}
			}
	


