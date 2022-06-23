public class Sum {
    private static int count = 1;
    private static int accumulator = 0;

    public static void sum() {
        while ( count <= 100 ) {
            if ( count % 2 == 0 ) {
                accumulator = accumulator + count;
            }
            count++;
        }
        System.out.println( "A soma dos números pares de 1 a 100 é " + accumulator );
    }
}
