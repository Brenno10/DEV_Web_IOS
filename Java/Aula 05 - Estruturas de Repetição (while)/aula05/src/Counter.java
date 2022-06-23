public class Counter {
    private static int count = 1;

    public static void counter() {
        while ( count <= 100 ) {
            System.out.print( count + ", " );
            if ( count % 30 == 0 ) System.out.println( "" );
            count++;
        }
    }
}
