import java.util.Scanner;

public class Smallest {
    private static Scanner input = new Scanner( System.in );
    private static int[] numbers = new int[10];

    public static void allAnswers() {
        for ( int i = 0; i < numbers.length; i++ ) {
            System.out.println( "\nDigite um n�mero:" );
            numbers[i] = input.nextInt();
        }
        System.out.println( "Maior n�mero: " + highest() );
        System.out.println( "Menor n�mero: " + smallest() );
        System.out.println( "M�dia: " + media() );
    }

    private static int smallest() {
        int smallsetsNumber = numbers[0];

        for ( int i = 0; i < numbers.length; i++ ) {
            if ( numbers[i] < smallsetsNumber ) {
                smallsetsNumber = numbers[i];
            }
        }
        return smallsetsNumber;
    }

    private static int highest(  ) {
        int highestNumber = numbers[0];

        for ( int i = 0; i < numbers.length; i++ ) {
            if ( numbers[i] > highestNumber ) {
                highestNumber = numbers[i];
            }
        }
        return highestNumber;
    }

    private static float media() {
        float mediaTotal, sum = 0;

        for ( int i = 0; i < numbers.length; i++ ) {
            sum += numbers[i];
        }
        mediaTotal = sum / numbers.length;
        return mediaTotal;
    }
}
