import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner( System.in );
        boolean start = true;

        System.out.println( "\n - Digite help para lista de comandos - " );
        while ( start ) {
            System.out.println( "\n===" );
            String command = input.nextLine();

            switch ( command ) {
                case "calc" -> Calculations.calc();
                case "media" -> SemesterAverage.average();
                case "help" -> System.out.println(
                        "\ncalc: calcula a tabuada de 1 a 10, " +
                                "raiz quadrada e verifica a paridade do número digitado" +
                        "\nmedia: calcula a média semestral de 8 notas de um aluno" +
                        "\nhelp: mostra a lista de comandos" +
                        "\nstop: para a aplicação"
                );
                case "stop" -> start = false;
                default -> System.out.println( "Comando inválido" );
            }
        }
        input.close();
    }
}
