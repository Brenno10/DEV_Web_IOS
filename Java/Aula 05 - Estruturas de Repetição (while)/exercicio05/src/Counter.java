public class Counter {
    private static int count = 100;

    public  static void counter() {
        while ( count <= 200 ) {
            if ( count == 200 ) {
                System.out.print( count + "." );
            }
            else {
                System.out.print(count + ", ");
                if (count % 30 == 0) System.out.println("");
            }
            count++;
        }

        count = 100;
    }
}
