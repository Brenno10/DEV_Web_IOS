import java.util.Scanner;
import java.util.Random;

public class GuessTheRandomNumber {
    public static void main( String[] args ) {
        Random rand = new Random();

        int guess = 0;
        int num;

        // o alcance dos números inclue 0 e não inclue o 50
        num = rand.nextInt(50) + 1;

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
