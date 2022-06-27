import java.util.Scanner;

public class Main {
    private static Scanner input = new Scanner( System.in );
    private static boolean start = true;

    public static void main(String[] args) {
        while (start) {
            String command = input.nextLine();

            switch ( command ) {
                case "teste1" -> Teste.teste();
                case "teste2" -> Teste2.teste2();
                case "teste3" -> Teste3.teste3();
                case "stop" -> start = false;
                default -> System.out.println( "\nComando inválido" );
            }
        }
        input.close();
    }
}
