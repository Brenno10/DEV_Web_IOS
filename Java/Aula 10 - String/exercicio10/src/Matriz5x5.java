public class Matriz5x5 {
    private static int[][] numbers = new int[5][5];

    public static void matriz5() {
        int x, y;

        for ( x = 0; x < numbers.length; x++ ) {
            for ( y = 0; y < numbers[x].length; y++ ) {
                if ( x == y ) {
                    numbers[x][y] = 1;
                }
                else numbers[x][y] = 0;
            }
        }

        for ( x = 0; x < numbers.length; x++ ) {
            for ( y = 0; y < numbers[x].length; y++ ) {
                System.out.print( numbers[x][y] + "\t" );
            }
            System.out.println( "" );
        }
    }
}
