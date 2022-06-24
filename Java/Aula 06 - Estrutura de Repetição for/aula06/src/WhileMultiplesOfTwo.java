public class WhileMultiplesOfTwo {
    private static int i;

    public static void whileMult() {
        System.out.println( "Todos os multiplos de 2 menores que 1000 em while" );
        i = 0;
        while ( i <= 1000 ) {
            if ( i % 2 == 0 ) {
                System.out.print( i + ", " );
                if ( i % 50 == 0 ) System.out.println( "" );
            }
            i++;
        }
        i = 0;
    }
}
