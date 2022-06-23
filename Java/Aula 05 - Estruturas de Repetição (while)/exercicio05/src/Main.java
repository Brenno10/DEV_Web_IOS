import java.util.Scanner;

public class Main {
    public static void main( String[] args ) {
        Scanner input = new Scanner( System.in );
        boolean start = true;

        System.out.println( "\nDigite help para lista de comandos" );
        while ( start ) {
            System.out.println( "\n===" );
            String command = input.nextLine();

            switch ( command ) {
                case "counter" -> Counter.counter();
                case "parity" -> Parity.parity();
                case "mult" -> MultTable.mult();
                case "small" -> SmallestNumber.small();
                case "help" -> System.out.println(
                        "\ncounter: escreve os números de 100 a 200" +
                        "\nparity: lê 10 números e te diz quantos são pares e quantos são impares" +
                        "\nmult: escreve a tabuada do 1 ao 10 do número digitado" +
                        "\nsmall: lê 10 números inteiros e te diz qual deles é o menor" +
                        "\nhelp: mostra a lista de comandos" +
                        "\nstop: para a aplicação"
                );
                case "stop" -> start = false;
                default -> System.out.println( "\nComando inválido" );
            }
        }
        input.close();
    }
}
