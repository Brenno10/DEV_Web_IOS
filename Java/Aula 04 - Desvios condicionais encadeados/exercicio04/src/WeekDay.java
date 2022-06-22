import java.util.Scanner;

public class WeekDay {
    public static void main( String[] args ) {
        String[] weekDays = {
                "Domingo",
                "Segunda-feira",
                "Terça-feira",
                "Quarta-feira",
                "Quinta-feira",
                "Sexta-feira",
                "Sábado"
        };

        boolean run = true;

        Scanner input = new Scanner( System.in );

        System.out.println( "\n=== Dias da semana ===" );
        System.out.println( "Digite um número de 1 a 7" );
        int i = input.nextInt();

        while ( run ) {
            if ( (i < 1) || (i > 7) ) {
                System.out.println( "Apenas números entre 1 e 7" );
                i = input.nextInt();
            }
            else {
                System.out.println( weekDays[i - 1] );
                run = false;
            }
        }

        input.close();
    }
}
