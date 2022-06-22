import java.util.Scanner;

public class NumberOrganizer {
    public static void main( String[] args ) {
        Scanner input = new Scanner( System.in );

        System.out.println( "\n=== Organize seus números! ===" );
        System.out.println( "Digite um número" );
        float num1 = input.nextInt();

        System.out.println( "Digite outro número" );
        float num2 = input.nextInt();

        if ( num1 != num2 ) {
            if ( num1 > num2 ) {
                System.out.println( num2 + ", " + num1 + "." );
            }
            else if ( num1 < num2 ) {
                System.out.println( num1 + ", " + num2 + "." );
            }
        }
        else {
            System.out.println( "Os números são iguais!" );
        }

        input.close();
    }
}
