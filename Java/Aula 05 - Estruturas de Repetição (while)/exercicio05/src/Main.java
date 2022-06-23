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
                        "\ncounter: escreve os n�meros de 100 a 200" +
                        "\nparity: l� 10 n�meros e te diz quantos s�o pares e quantos s�o impares" +
                        "\nmult: escreve a tabuada do 1 ao 10 do n�mero digitado" +
                        "\nsmall: l� 10 n�meros inteiros e te diz qual deles � o menor" +
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
