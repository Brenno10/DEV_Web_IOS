import java.util.Scanner;

public class Main {
    public static void main( String[] args ) {
        Scanner input = new Scanner( System.in );

        boolean start = true;

        System.out.println( "\nDigite help para lista de comandos" );
        while ( start ) {
            System.out.println( "\n===" );
            String command = input.nextLine();

            switch (command) {
                case "counter" -> Counter.counter();
                case "decrement" -> Decrement.decrement();
                case "sum" -> Sum.sum();
                case "control" -> Control.control();
                case "score" -> Scores.scores();
                case "guess" -> GuessUP.guess();
                case "stop" -> start = false;
                case "help" -> System.out.println(
                        "\ncounter: conta todos os números de 1 a 100" +
                        "\ndecrement: conta todos os números de 100 a 1" +
                        "\nsum: calcula a soma de todos os números pares de 1 a 100" +
                        "\ncontrol: le seu nome caso seja maior de idade" +
                        "\nscore: faz a soma cumulativa de diversas notas de 0 a 10 " +
                                "(finaliza o calculo com qualquer outro número)" +
                        "\nguess: inicia o jogo de adivinhar o número" +
                        "\nhelp: mostra a lista de comandos" +
                        "\nstop: para a aplicação"
                );
                default -> System.out.println("\nComando inválido");
            }
        }
        input.close();
    }
}
