import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    private static Scanner input = new Scanner( System.in );
    private static ArrayList<Double> allDebts = new ArrayList<>();
    private static ArrayList<Double> allMonthlyIncome = new ArrayList<>();
    private static boolean start = true, valid = true;
    private static double monthlyIncome;

    public static void main( String[] args ) {
        System.out.println( "\nCalcule quanto que vai sobrar no final do mês" );

        // renda mensal
        System.out.println( "Digite sua renda mensal total" );
        while ( valid ) {
            String newMonthlyIncome = input.nextLine();

            if ( isNumber( newMonthlyIncome ) ) {
                allMonthlyIncome.add( turnIntoNumber( newMonthlyIncome ) );
            }
            else if ( newMonthlyIncome.equals( "stop" ) ) {
                monthlyIncome = sumMonthlyIncome();
                valid = false;
            }
            else System.out.println("\n" + newMonthlyIncome + " não é um número!");
        }
        System.out.println( percent( monthlyIncome ) );

        // despesas
        System.out.println( "\nDigite suas despesas mensais ( digite 'stop' para calcular )" );
        while ( start ) {
            String debt = input.nextLine();

            if ( isNumber( debt ) ) {
                double fixedNumber = turnIntoNumber( debt );
                allDebts.add( fixedNumber );
            }
            else if ( debt.equals( "stop" ) ) start = false;
            else System.out.println( "\nComando inválido. ( adicione uma despesa ou digite 'stop' para calcular )" );
        }
        calculate();
        input.close();
    }

    private static double percent( double num ) {
        return ( num * 0.33 );
    }

    // soma a renda total
    private static double sumMonthlyIncome() {
        double sum = 0;
        for ( int i = 0; i < allMonthlyIncome.size(); i++ ) {
            sum += allMonthlyIncome.get(i);
        }
        return sum;
    }

    // calcula quanto que sobra ou deve
    private static void calculate() {
        double sum = 0, total;

        for ( int i = 0; i < allDebts.size(); i++ ) {
            sum += allDebts.get( i );
        }
        total = monthlyIncome - sum;

        if ( total != 0 ) {
            if ( total > 0 ) System.out.println( "\nSobra R$: " + total );
            else System.out.println( "\nDeve R$: " + Math.abs( total ) );
        }
        else System.out.println( "\nNão sobra nada!" );
    }

    // verifica se é um número
    private static boolean isNumber( String num ) {
        String fixedNum = num.replaceAll( ",", "." );
        return fixedNum.matches("[+-]?\\d*(\\.\\d+)?" );
    }

    // converte para número
    private static double turnIntoNumber( String num ) {
        return Double.parseDouble( num.replaceAll( ",", "." ) );
    }
}
