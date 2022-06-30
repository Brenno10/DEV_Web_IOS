import java.util.Scanner;

public class Matriz4x4 {
    private static Scanner input = new Scanner( System.in );
    private static int[][] numbers = new int[4][4];

    public static int matriz4() {
        int x, y, howMany = 0;

        for ( x = 0; x < numbers.length; x++ ) {
            for ( y = 0; y < numbers[x].length; y++ ) {
                System.out.println( "\nLinha: " + ( x + 1) + " coluna: " + ( y + 1 ) );
                numbers[x][y] = input.nextInt();
            }
        }

        for ( x = 0; x < numbers.length; x++ ) {
            for ( y = 0; y < numbers[x].length; y++ ) {
                if ( numbers[x][y] > 10 ) {
                    howMany++;
                }
            }
        }
        return howMany;
    }
}
