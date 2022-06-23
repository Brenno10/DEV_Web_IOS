public class Decrement {
    private static int count = 100;

    public static void decrement() {
        while ( count >= 1 ) {
            System.out.print( count + ", " );
            if ( count % 30 == 0 ) System.out.println( "" );
            count--;
        }
    }
}
