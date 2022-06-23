import java.util.Scanner;

public class SmallestNumber {
    private static Scanner input = new Scanner( System.in );
    private static int smallest = 0;
    private static int i = 0;

    public static void small() {
        System.out.println( "\nDigite 10 números" );

        while ( i < 10 ) {
            int num = input.nextInt();

            if ( num < smallest ) {
                smallest = num;
            }
            i++;
        }
        System.out.println( "\nO menor número foi " + smallest );
    }
}
