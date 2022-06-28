public class MixArrays {
    private static int[] a = { 1, 2, 3, 4 };
    private static int[] b = { 7, 6, 5, 4, 3, 2, 1 };
    private static int[] c = new int[11];

    public static void mixedArr() {
        for ( int i = 0; i < a.length; i++ ) {
            c[i] = a[i];
        }
        for ( int i = 0; i < b.length; i++ ) {
            c[i + a.length] = b[i];
        }
        for ( int i = 0; i < c.length; i++ ) {
            System.out.println( "Item " + ( i + 1 ) + ": " + c[i] );
        }
    }
}
