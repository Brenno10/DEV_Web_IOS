import java.util.Scanner;

public class Main {
    public static void main( String[] args ) {
        Scanner input = new Scanner( System.in );

        System.out.println( "\nDigite help para lista de comandos" );
        for ( boolean start = true; start; ) {
            System.out.println( "\n===" );
            String command = input.nextLine();

            switch ( command ) {
                case "age" -> AgeExample.ageExample();
                case "mult" -> MultiplesOfTwo.mult();
                case "vs" -> ForVsWhile.vs();
                case "while" -> System.out.println(
                        "\nwhile age: l� a idade de 5 pessoas em while" +
                        "\nwhile mult: mostra todos os multiplos de 2 menores que 1000 em while"
                );
                case "while age" -> WhileAgeExample.whileAge();
                case "while mult" -> WhileMultiplesOfTwo.whileMult();
                case "help" -> System.out.println(
                        "\nage: l� a idade de 5 pessoas" +
                        "\nmult: mostra todos os multiplos de 2 menores que 1000" +
                        "\nvs: mostra o resultado de 2 c�digos iguais com for e while" +
                        "\nwhile: mostra a lista de c�digos com while" +
                        "\nhelp: mostra a lista de comandos" +
                        "\nstop: para a aplica��o"
                );
                case "stop" -> start = false;
                default -> System.out.println( "\nComando inv�lido" );
            }
        }
        input.close();
    }
}
