import java.util.ArrayList;
import java.util.Scanner;

public class SmallestNumber {
    private static Scanner input = new Scanner( System.in );
    private static int smallest = 2147483647;
    private static int i = 0;
    private static ArrayList<Integer> isEqual = new ArrayList<Integer>();

    // verifica se todos os elementos do array isEqual s�o iguais
    private static boolean ifIsAllEqual() {
        for ( int index = 0; index < isEqual.size(); index++ ) {
            if ( isEqual.get( index ) != isEqual.get( 0 ) ) {
                return false;
            }
        }
        return true;
    }

    // m�todo principal que verifica qual � o menor n�mero
    public static void small() {
        System.out.println( "\nDigite 10 n�meros" );

        while ( i < 10 ) {
            int num = input.nextInt();
            isEqual.add( num );

            if ( num < smallest ) {
                smallest = num;
            }
            i++;
        }
        if ( ifIsAllEqual() ) {
            System.out.println( "Todos os n�meros s�o iguais!" );
        }
        else {
            System.out.println( "\nO menor n�mero foi " + smallest );
        }
        // reseta tudo para que poss�o ser re�tilizados
        isEqual.clear();
        i = 0;
        smallest = 0;
    }
}
