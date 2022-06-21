import java.util.Scanner;

public class GuessTheNumber {
    public static void main( String[] args ) {
        int num = 15;
        int guess = 0;

        Scanner input = new Scanner( System.in );
        System.out.println( "Digite seu palpite de numero!" );

        while ( guess != num ) {
            guess = input.nextInt();

            if ( guess == num ) {
                System.out.println( "Voce acertou!" );
            }
            else {
                if ( guess < num ) {
                    System.out.println( "Seu palpite esta abaixo!" );
                }
                else {
                    System.out.println( "Seu palpite esta acima!" );
                }
            }
        }

        input.close();
    }
}
