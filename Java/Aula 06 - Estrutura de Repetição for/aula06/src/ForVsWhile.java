public class ForVsWhile {
    private static int i;

    public static void vs() {
        // Loop em For
        System.out.println( "\nLoop em For" );
        for ( i = 0; i < 5; i++ ) {
            if ( i != 4 ) {
                System.out.println( "O valor do contador é " + i );
            }
            else {
                System.out.println( "O valor do contador é " + i );
                System.out.print( "" );
            }
        }
        i = 0;

        // Loop em While
        System.out.println( "\nLoop em While" );
        while ( i < 5 ) {
            System.out.println( "O valor do contador é " + i );
            i++;
        }
        i = 0;
    }
}
