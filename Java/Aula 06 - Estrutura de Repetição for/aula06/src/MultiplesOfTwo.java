public class MultiplesOfTwo {
    private static int i;

    public static void mult() {
        System.out.println( "Todos os multiplos de 2 menores que 1000" );
        for ( i = 0; i <= 1000; i++ ) {
            if ( i % 2 == 0 ) {
                System.out.print( i + ", " );
                if ( i % 50 == 0 ) System.out.println( "" );
            }
        }
    }
}
