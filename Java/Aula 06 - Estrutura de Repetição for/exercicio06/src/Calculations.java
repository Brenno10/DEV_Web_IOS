import java.util.Scanner;

public class Calculations {
    private static Scanner input = new Scanner( System.in );

    public static void calc() {
        System.out.println( "\nDigite um número" );
        double base = input.nextDouble();

        // tabuada
        System.out.println( " - Tabuada do " + base );
        multTable( base );
        System.out.println( "" );

        // raiz quadrada
        System.out.println( "A raiz quadrada de " + base + " é " + root( base ) );
        System.out.println( "" );

        // paridade
        if ( parity( base ) ) System.out.println( base + " é par" );
        else System.out.println( base + " é impar" );
        System.out.println( "" );
    }

    public static void multTable( double base ) {
        if ( base != 0 ) {
            for (int i = 1; i <= 10; i++) {
                System.out.println(base + " x " + i + " = " + base * i);
            }
        }
        else {
            System.out.println( "Todo número multiplicado por 0 é 0" );
        }
    }

    public static double root( double base ) {
        return Math.sqrt( base );
    }

    public static boolean parity ( double base ) {
        if ( base % 2 != 0 ) {
            return false;
        }
        return true;
    }
}
