import java.util.Scanner;

public class WichIsBigger {
    public static void main( String[] args ) {
        Scanner input = new Scanner( System.in );

        System.out.println( "\n=== Qual número é maior ===" );
        System.out.println( "Digite um número" );
        float num1 = input.nextFloat();

        System.out.println( "Digite outro número" );
        float num2 = input.nextFloat();

        System.out.println( "Digite mais um número" );
        float num3 = input.nextFloat();

        if ( (num1 == num2) && (num1 == num3) ) {
            System.out.println( "Todos são iguais" );
        }
        else {
            float maxValue = 0;
            float[] numbers = { num1, num2, num3 };

            for ( int i = 0; i < numbers.length; i++ ) {
                if ( maxValue < numbers[i] ) {
                    maxValue = numbers[i];
                }
            }

            System.out.println( "O maior número é " + maxValue );
        }

        input.close();
    }
}
