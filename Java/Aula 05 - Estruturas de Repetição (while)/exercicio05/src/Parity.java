import java.util.Scanner;
import java.util.ArrayList;

public class Parity {
    private static Scanner input = new Scanner( System.in );
    private static ArrayList<Integer> even = new ArrayList<Integer>();
    private static ArrayList<Integer> odd = new ArrayList<Integer>();
    private static ArrayList<Integer> isEqual = new ArrayList<Integer>();
    private static int i = 0;
    private static int num;

    private static boolean ifIsAllEqual() {
        for ( int index = 0; index < isEqual.size(); index++ ) {
            if ( isEqual.get( index ) != isEqual.get( 0 ) ) {
                return false;
            }
        }
        return true;
    }

    public static void parity() {
        System.out.println( "\nDigite 10 números" );
        while ( i < 10 ) {
            num = input.nextInt();

            if ( num % 2 == 0 ) {
                even.add(num);
            }
            else {
                odd.add(num);
            }
            isEqual.add( num );
            i++;
        }
        if ( ifIsAllEqual() ) {
            int equalNumParity = isEqual.get(0);

            if ( equalNumParity % 2 == 0 ) {
                System.out.println( "Todos os números são iguais e pares" );
            }
            else {
                System.out.println( "Todos os números são iguais e impares" );
            }
        }
        else {
            System.out.println( "" );
            System.out.println( even.size() + " são pares" );
            System.out.println( odd.size() + " são impares" );
        }

        i = 0;
        even.clear();
        odd.clear();
        isEqual.clear();
    }
}
