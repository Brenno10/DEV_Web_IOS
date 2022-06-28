package br.com.aluno;

import java.util.Scanner;

public class Banco {
    private static Scanner input = new Scanner( System.in );
    private static String[] accountOptionsArr = { "Corrente", "poupan�a", "Estudante" };

    public static void main(String[] args) {
        System.out.println( "\nBem vindo ao -- Internet Banking!" );
        accountOptions();
        choseAgain();
        input.close();
    }

    private static void accountOptions() {
        allAccOptions();
        int option = input.nextInt();
        boolean restart = false;

        do {
            if ( option >= 0 || option < accountOptionsArr.length ) {
                for ( int i = 0; i < accountOptionsArr.length; i++ ) {
                    if ( i == option - 1 ) {
                        System.out.println( "\nVoc� est� no banco " + accountOptionsArr[i] + "." );
                    }
                }
            }
            else restart = true;
        } while ( restart );
    }

    private static void choseAgain() {
        boolean stop = true;

        while ( stop ) {
            System.out.println( "Deseja confirmar? ( y/n )" );
            String yesNo = input.next();

            if ( yesNo.equalsIgnoreCase( "n" ) ||
                    yesNo.equalsIgnoreCase( "n�o" ) ||
                    yesNo.equalsIgnoreCase( "no" ) ||
                    yesNo.equalsIgnoreCase( "nao" ) ) {
                accountOptions();
            } else {
                stop = false;
                System.out.println( "\nObrigado por usar --Internet Banking!" );
            }
        }
    }

    private static void allAccOptions() {
        System.out.println( "Selecione sua op��o de conta\n" );
        for ( int i = 0; i < accountOptionsArr.length; i++ ) {
            System.out.println( ( i + 1 ) + " - Conta " + accountOptionsArr[i] );
        }
    }
}
