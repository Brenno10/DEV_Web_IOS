import java.util.Scanner;

public class Exemplo1Vetor {
    public static void main(String[] args) {
        double[] scores = new double[10];
        Scanner input = new Scanner( System.in );
        int size = scores.length;

        for ( int i = 0; i < size; i++ ) {
            System.out.println( "\nDigite a nota " + ( i + 1) );
            scores[i] = input.nextDouble();
        }

        for ( int i = 0; i < size; i++ ) {
            System.out.println( "nota: " + ( i + 1 ) + " = " + scores[i] );
        }
        input.close();
    }
}
