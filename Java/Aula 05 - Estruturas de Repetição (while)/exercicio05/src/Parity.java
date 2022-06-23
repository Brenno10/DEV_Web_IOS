import java.util.Scanner;
import java.util.ArrayList;

public class Parity {
    private static Scanner input = new Scanner( System.in );
    private static ArrayList<Integer> even = new ArrayList<Integer>();
    private static ArrayList<Integer> odd = new ArrayList<Integer>();
    private static int i = 0;
    private static int num;

    public static void parity() {
        System.out.println( "\nDigite 10 números" );
        while ( i < 10 ) {
            num = input.nextInt();

            if ( num % 2 == 0 ) {
                even.add(num);
            }
            else {
                odd.add(num);
            }
            i++;
        }
        System.out.println( "" );
        System.out.println( even.size() + " São pares" );
        System.out.println( odd.size() + " São impares" );
    }
}
