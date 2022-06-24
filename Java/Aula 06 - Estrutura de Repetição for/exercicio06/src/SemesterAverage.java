import java.util.ArrayList;
import java.util.Scanner;

public class SemesterAverage {
    private static Scanner input = new Scanner( System.in );
    private static ArrayList<Float> allScores = new ArrayList<>();

    public static void average() {
        System.out.println( "\nDigite o nome do aluno" );
        String student = input.nextLine();
        input.nextLine();

        System.out.println( "\nDigite 8 notas de 0 a 10" );
        for ( int i = 0; i < 8; i++ ) {
            float scores = input.nextFloat();

            if ( scores >= 0 && scores <= 10 ) allScores.add(scores);
            else i--;
        }

        System.out.println(
                "\nNome: " + student +
                "\nNotas: " + allScores +
                "\nMédia semestral: " + getAverage( allScores )
        );

        allScores.clear();
    }

    private static float getAverage( ArrayList<Float> base ) {
        float sum = 0;

        for ( int i = 0; i < base.size(); i++ ) {
            sum += base.get(i);
        }
        return sum / base.size();
    }
}
