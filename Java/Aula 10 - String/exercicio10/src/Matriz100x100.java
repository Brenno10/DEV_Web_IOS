import java.util.Random;

public class Matriz100x100 {
    private static Random rand = new Random();
    private static int[][] numbers = new int[100][100];

    public static void matriz100() {
        int x, y;

        for ( x = 0; x < numbers.length; x++ ) {
            for (y = 0; y < numbers[x].length; y++) {
                numbers[x][y] = rand.nextInt(100) + 1;
            }
        }

        for ( x = 0; x < numbers.length; x++ ) {
            for ( y = 0; y < numbers[x].length; y++ ) {
                if ( numbers[x][y] % 2 == 0 ) numbers[x][y] = 1;
                else numbers[x][y] = -1;
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
