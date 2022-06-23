import java.util.Scanner;

public class Scores {
    private static Scanner input = new Scanner( System.in );
    private static double score, sum = 0;

    public static void scores() {
        do {
            System.out.println( " ---- Digite uma nota ----" );
            score = input.nextDouble();

            if ( score >= 0 && score <= 10 ) sum += score;

        } while ( score >= 0 && score <= 10);
            System.out.println("A soma das notas é: " + sum);
    }
}
