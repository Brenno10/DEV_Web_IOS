import java.util.Scanner;

public class InverseOrder {
    private static String[] names = new String[5];
    private static Scanner input = new Scanner( System.in );

    public static void invert() {
        for ( int i = 0; i < names.length; i++ ) {
            System.out.println( "\nDigite um nome:" );
            names[i] = input.next();
        }

        System.out.println( "" );
        for ( int i = names.length - 1; i > 0; i-- ) {
            System.out.println( "Nome: " + names[i] );
        }
    }
}
