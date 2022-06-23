import java.util.Scanner;

public class Control {
    private static Scanner input = new Scanner( System.in );

    private static int age;
    private static String name;
    private static char answer = 'y';

    public static void control() {
        while ( answer == 'y' ) {
            System.out.println( "Digite o seu nome:" );
            name = input.next();

            System.out.println("Digite sua idade:");
            age = input.nextInt();

            if ( age >= 18 ) {
                System.out.println( "Seu nome é: " + name );
            }

            System.out.println("Deseja continuar? (y/n):");
            answer = input.next().charAt(0);
        }
    }
}
