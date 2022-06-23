import java.util.Scanner;
import java.util.Random;

public class GuessUP {
    private static Scanner input = new Scanner( System.in );
    private static Random rand = new Random();
    private static int playerGuess = 0, num = rand.nextInt(10) + 1, attempt = 0;

    public static void guess() {
        System.out.println( "\nAdivinhe o número entre 1 e " + num );
        System.out.println("Digite seu palpite:");

        do {
            playerGuess = input.nextInt();

            if ( playerGuess == num ) {
                System.out.println("\nVocê acertou!");
            }
            else {
                if ( playerGuess < num ) {
                    System.out.println("\nSeu palpite está abaixo.");
                }
                else {
                    System.out.println("\nSeu palpite está acima.");
                }
            }
            attempt++;
        } while ( playerGuess != num && attempt != 3 );

        if ( attempt == 3 ) System.out.println( "\nSuas tentativas acabaram! O número era " + num );
    }
}
