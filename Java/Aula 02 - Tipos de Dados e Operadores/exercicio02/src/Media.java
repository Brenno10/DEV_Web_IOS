import java.util.ArrayList;
import java.util.Scanner;

public class Media {
    public static void main( String[] args ) {
        Scanner input = new Scanner( System.in );

        ArrayList<Float> allStudentScores = new ArrayList<Float>();
        float scoreSum = 0;

        System.out.println( "Nome do aluno(a)" );
        String studentName = input.nextLine();

        // Adicionar as 4 notas
        while ( allStudentScores.size() < 4 ) {
            System.out.println( "Digite a nota " + ( allStudentScores.size() + 1 ) + " do aluno" );
            float newScore = input.nextFloat();

            allStudentScores.add( newScore );
        }

        // quando tiver as 4 notas para calcular a média
        if ( allStudentScores.size() >= 4 ) {
            for ( int i = 0; i < allStudentScores.size(); i++ ) {
                scoreSum += allStudentScores.get(i);
            }

            String name = studentName;

            String score = "";

            for ( int i = 0; i < allStudentScores.size(); i++ ) {
                if ( i == 3 ) {
                    score += ( allStudentScores.get(i) + "." );
                }
                else {
                    score += ( allStudentScores.get(i) + ", " );
                }
            }

            float media = scoreSum / allStudentScores.size();

            System.out.println( "Nome: " + name );
            System.out.println( "Notas: " + score );
            System.out.println( "Média: " + media );
        }

        input.close();
    }
}
