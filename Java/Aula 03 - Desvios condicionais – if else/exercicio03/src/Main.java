import java.util.Scanner;

public class Main {
    private static Scanner input = new Scanner( System.in );
    private static final String[] allSeasons = { "primavera", "verão", "outono", "inverno" };
    private static final String[] allMonths = {
            "janeiro", "fevereiro", "março", "abril", "maio", "junho",
            "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    };

    public static void main( String[] args ) {
        System.out.println( "\nDescubra a estação de qualquer mês" );
        System.out.println( "\nDigite o mês" );
        String month = input.nextLine();

        if ( isValidMonth( month ) ) {
            System.out.println( "\nA estação de " + month + " é " + getSeasons( month ) );
        }
        else {
            System.out.println( "\n" + month + " não é um mês válido!" );
        }
        input.close();
    }

    private static String getSeasons( String month ) {
        int season = 0;

        switch ( month ) {
            case "janeiro", "fevereiro", "março" -> season = 1;
            case "abril", "maio", "junho" -> season = 2;
            case "julho", "agosto", "setembro" -> season = 3;
        }
        return allSeasons[ season ];
    }

    private static boolean isValidMonth( String month ) {
        for ( int i = 0; i < allMonths.length; i++ ) {
            if ( month.equalsIgnoreCase( allMonths[i] ) ) return true;
        }
        return false;
    }
}
