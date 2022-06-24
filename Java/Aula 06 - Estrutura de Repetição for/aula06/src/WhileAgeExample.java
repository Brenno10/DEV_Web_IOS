import java.util.ArrayList;
import java.util.Scanner;

public class WhileAgeExample {
    private static Scanner input = new Scanner( System.in );
    private static ArrayList<String> allNames = new ArrayList<>();
    private static ArrayList<Integer> allAges = new ArrayList<>();
    private static int i;

    public static void whileAge() {
        i = 0;
        while ( i < 5 ) {
            System.out.println( "\nDigite o nome" );
            String names = input.next();

            System.out.println( "\nDigite a idade" );
            int ages = input.nextInt();

            allNames.add( names );
            allAges.add( ages );
            i++;
        }
        i = 0;

        while ( i < 5 ) {
            System.out.println( "\nNome: " + allNames.get(i) + "\nIdade: " + allAges.get(i) );
            System.out.print( "" );
            i++;
        }
        i = 0;
        allAges.clear();
        allNames.clear();
    }
}
