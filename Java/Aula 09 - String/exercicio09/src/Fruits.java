import java.util.Scanner;

public class Fruits {
    private static Scanner input = new Scanner( System.in );
    private static String[] fruits = new String[5];
    private static String newFruit;
    private static int counter = 0;

    public static void main( String[] args ) {
        System.out.println( "\nDigite 5 frutas" );
        while ( counter < fruits.length ) {
            newFruit = input.next();

            if ( valid() && exist() ) {
                fruits[ counter ] = newFruit.trim().toLowerCase();
                counter++;
            }
            else if ( !valid() ) {
                System.out.println( "\nDigite pelo menos 3 digitos" );
            }
            else if ( !exist() ) {
                System.out.println( newFruit + " ja existe!" );
            }
        }
        writeFruits();
        input.close();
    }

    private static boolean valid() {
        if ( newFruit.trim().length() >= 3 ) {
            return true;
        }
        return false;
    }

    private static boolean exist() {
        for ( int i = 0; i < fruits.length; i++ ) {
            if ( fruits[i] != null ) {
                if ( newFruit.toUpperCase().compareTo( fruits[i].toUpperCase() ) == 0 ) {
                    return false;
                }
            }
        }
        return true;
    }

    private static void writeFruits() {
        System.out.println( "" );
        for ( int i = 0; i < fruits.length; i++ ) {
            System.out.println( fruits[i] );
        }
    }
}
