import java.util.ArrayList;
import java.util.Scanner;

public class SmallestNumber {
    private static Scanner input = new Scanner( System.in );
    private static int smallest = 2147483647;
    private static int i = 0;
    private static ArrayList<Integer> isEqual = new ArrayList<Integer>();

    // verifica se todos os elementos do array isEqual são iguais
    private static boolean ifIsAllEqual() {
        for ( int index = 0; index < isEqual.size(); index++ ) {
            if ( isEqual.get( index ) != isEqual.get( 0 ) ) {
                return false;
            }
        }
        return true;
    }

    // método principal que verifica qual é o menor número
    public static void small() {
        System.out.println( "\nDigite 10 números" );

        while ( i < 10 ) {
            int num = input.nextInt();
            isEqual.add( num );

            if ( num < smallest ) {
                smallest = num;
            }
            i++;
        }
        if ( ifIsAllEqual() ) {
            System.out.println( "Todos os números são iguais!" );
        }
        else {
            System.out.println( "\nO menor número foi " + smallest );
        }
        // reseta tudo para que possão ser reútilizados
        isEqual.clear();
        i = 0;
        smallest = 0;
    }
}
