import java.util.ArrayList;
import java.util.Scanner;

public class AgeExample {
    private static Scanner input = new Scanner( System.in );
    private static ArrayList<String> allNames = new ArrayList<>();
    private static ArrayList<Integer> allAges = new ArrayList<>();

    public static void ageExample() {
        for ( int i = 0; i < 5; i++ ) {
            System.out.println( "\nDigite o nome" );
            String names = input.next();

            System.out.println( "\nDigite a idade" );
            int ages = input.nextInt();

            allNames.add( names );
            allAges.add( ages );
        }

        for ( int i = 0; i < 5; i++ ) {
            System.out.println( "\nNome: " + allNames.get(i) + "\nIdade: " + allAges.get(i) );
            System.out.print( "" );
        }

        allAges.clear();
        allNames.clear();
    }
}
