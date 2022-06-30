import java.util.Scanner;

public class Main {
    private static Scanner input = new Scanner( System.in );
    private static boolean start = true;

    public static void main(String[] args) {
        while ( start ) {
            System.out.println( "\nDigite um comando" );
            String command = input.next();

            switch ( command ) {
                case "m4" -> System.out.println( "\n" + Matriz4x4.matriz4() + " são maiores que 10" );
                case "m5" -> Matriz5x5.matriz5();
                case "m100" -> Matriz100x100.matriz100();
                case "stop" -> start = false;
                default -> System.out.println( "\nComando inválido" );
            }
        }
        input.close();
    }
}
