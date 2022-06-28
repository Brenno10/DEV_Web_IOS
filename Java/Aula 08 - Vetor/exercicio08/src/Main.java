import java.util.Scanner;

public class Main {
    private static Scanner input = new Scanner( System.in );
    private static boolean start = true;

    public static void main(String[] args) {
        while ( start ) {
            System.out.println( "\nDigite um comando" );
            String command = input.next();

            switch ( command ) {
                case "invert" -> InverseOrder.invert();
                case "small" -> Smallest.allAnswers();
                case "random" -> System.out.println( FindRandomSmallest.randSmallest() + " é o menor número" );
                case "mix" -> MixArrays.mixedArr();
                case "stop" -> start = false;
                default -> System.out.println( "\nComando inválido" );
            }
        }
        input.close();
    }
}
