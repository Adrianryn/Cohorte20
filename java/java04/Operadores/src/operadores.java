import java.util.Scanner;

public class operadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		//System.out.println("----Da un dato----");
		//String dato = scanner.nextLine();
		//System.out.println("----el dato es:----" + dato);
		System.out.println("----ingresa valor 1----");
		int valor = scanner.nextInt();
		System.out.println("----ingresa valor 2----");
		int valor0 = scanner.nextInt();
	
		int suma = valor + valor0;
		System.out.println("suma: " + suma);
		
		int rest = valor - valor0;
		System.out.println("rest: " + rest);
		
		System.out.println("introduce el valor 1");
		int a = scanner.nextInt();
		System.out.println("introduce el valor 2");
		int b = scanner.nextInt();
		int multi = a * b;
		System.out.println("multiplicacion: " + multi);
		
		int div = valor / valor0;
		System.out.println("divicion: " + div);
	}

}
