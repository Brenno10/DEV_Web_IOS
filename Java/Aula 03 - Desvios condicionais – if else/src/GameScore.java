import java.util.Scanner;

public class GameScore {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int requiredScore = 1000;

        System.out.println("Digite o seu nome");
        String player = input.nextLine();

        System.out.println("Pontos");
        int score = input.nextInt();

        if ( score < requiredScore) {
            System.out.println(player);
            System.out.println("Pontuação: " + score);
            System.out.println("Não passou de faze!");
        }
        else if ( score >= requiredScore) {
            System.out.println(player);
            System.out.println("Pontuação: " + score);
            System.out.println("Passou de faze!");
        }

        input.close();
    }
}
