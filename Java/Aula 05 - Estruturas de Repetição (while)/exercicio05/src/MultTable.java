import java.util.Scanner;

public class MultTable {
    private static Scanner input = new Scanner( System.in );
    private static int toMult = 1;

    public static void mult() {
        System.out.println( "\nDigite o n�mero para ser multiplicado" );
        int base = input.nextInt();

        System.out.println( "\nTabuada do " + base );
        if ( base == 0 ) {
            System.out.println( "Todo n�mero multiplicado por 0 � 0" );
        }
        else {
            do {
                int result = base * toMult;
                System.out.println(base + "x" + toMult + "=" + result);

                toMult++;
            } while (toMult <= 10);
        }

        toMult = 1;
    }
}
