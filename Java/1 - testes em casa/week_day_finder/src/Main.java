import java.util.Scanner;

public class Main {
    private static Scanner input = new Scanner( System.in );
    private static final String[] allWeekDays =
            { "sabado", "domingo", "segunda", "terça", "quarta", "quinta", "sexta" };
    private static final String[] allMonths = {
            "janeiro", "fevereiro", "março", "abril", "maio", "junho",
            "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    };
    private static int globalYear;

    public static void main( String[] args ) {
        System.out.println( "\nEncontre o dia da semana da data indicada" );
        System.out.println( "\nDigite o dia" );
        int day = input.nextInt();

        System.out.println( "\nDigite o mês" );
        int month = input.nextInt();

        System.out.println( "\nDigite o ano" );
        int year = input.nextInt();
        globalYear = year;

        // o ano 0 não existe
        if ( year != 0 ) {
            System.out.println(
                    "\nO dia da semana de " + day + " de " + getMonth(month) + " de " + year + " é " +
                            getWeekDay(day, month, getLastTwo(year))
            );
        }
        else {
            System.out.println( "O ano 0 não existe!" );
        }

        input.close();
    }

    // pega o index do dia da semana e o retorna em string
    // calculo para o dia da semana: Dia + Chave do mês + Chave do ano - Maior múltiplo de 7 = Dia da semana
    private static String getWeekDay( int day, int month, int year ) {
        int calc = day + monthKey( month ) + yearKey( year );
        int weekDay = calc - highestMultipleOf( 7, calc );

        if ( ( month == 1 || month == 2 ) && isLeapYear( globalYear ) ) return allWeekDays[weekDay - 1];
        return allWeekDays[weekDay];
    }

    // pega a chave do ano para o calculo final
    private static int yearKey( int year ) {
        int key = 0;

        // todas as chaves dos ultimos digitos do ano de 0 a 99
        switch (year) {
            case 0, 6, 17, 23, 28, 34, 45, 51, 56, 62, 73, 79, 84, 90 -> key = 0;
            case 1, 7, 12, 18, 29, 35, 40, 46, 57, 63, 68, 74, 85, 91, 96 -> key = 1;
            case 2, 13, 19, 24, 30, 41, 47, 52, 58, 69, 75, 80, 86, 97 -> key = 2;
            case 8, 14, 25, 31, 36, 42, 53, 59, 64, 70, 81, 87, 92, 98 -> key = 3;
            case 9, 15, 20, 26, 37, 43, 48, 54, 65, 71, 76, 82, 93, 99 -> key = 4;
            case 4, 10, 21, 27, 32, 38, 49, 55, 60, 66, 77, 83, 88, 94 -> key = 5;
            case 5, 11, 16, 22, 33, 39, 44, 50, 61, 67, 72, 78, 89, 95 -> key = 6;
        }

        //
        if ( ( globalYear >= 100 && globalYear < 200 ) || ( globalYear >= 500 && globalYear < 600 ) || ( globalYear >= 900 && globalYear < 1000 ) ) return key - 3;
        else if ( ( globalYear >= 200 && globalYear < 300 ) || ( globalYear >= 600 && globalYear < 700 ) || ( globalYear >= 1000 && globalYear < 1100 ) ) return key + 2;
        else if ( ( globalYear >= 400 && globalYear < 500 ) || ( globalYear >= 800 && globalYear < 900 ) || ( globalYear >= 2000 && globalYear < 2100 ) ) return key - 1;
        //

        switch ( getKeyGroup( globalYear ) ) {
            case 1 -> {
                return key - 1;
            }
            case 2 -> {
                return key - 3;
            }
            case 3 -> {
                return key + 2;
            }
            default -> {
                return key;
            }
        }
    }

    // pega a chave do mês para o calculo final
    private static int monthKey( int month ) {
        int key = 0;

        // todas as chaves dos meses de 1 a 12
        if ( isValidMonth( month ) ) {
            switch ( month ) {
                case 4, 7 -> key = 0;
                case 1, 10 -> key = 1;
                case 5 -> key = 2;
                case 8 -> key = 3;
                case 2, 11, 3 -> key = 4;
                case 6 -> key = 5;
                case 9, 12 -> key = 6;
            }
        }
        return key;
    }

    // verifica o grupo do ano
    private static int getKeyGroup( int year ) {
        // 4 grupos de 0 a 99 que pulam 400
        // ex: 2° grupo
        // [..., [-300, -299, -298, -297, ..., -201], [100, 101, 102, 103, ..., 199], [500, 501, 502, 503, ..., 599], ...]

        // * ( o ano 0 não existe, então seria 001 ao inves de 000 );
        // 1° - ( key - 1 = [ ..., -400, 000*, 400, 800, 1200, 1600, 2000, ... ]
        // 2° - ( key - 3 = [ ..., -300, 100, 500,  900, 1300, 1700, 2100, ... ]
        // 3° - ( key + 2 = [ ..., -200, 200, 600, 1000, 1400, 1800, 2200, ... ]
        // 4° - ( key + 0 = [ ..., -100, 300, 700, 1100, 1500, 1900, 2300, ... ]

        int group = 0;

        if ( year < 0 ) {

        }
        else {

        }

        return group;
    }

    // pega o nome do mês
    private static String getMonth( int month ) {
        if ( isValidMonth( month ) ) {
            return allMonths[month - 1];
        }
        return "mês inválido";
    }

    // verifica se é um mês válido
    private static boolean isValidMonth( int month ) {
        return month >= 1 && month <= 12;
    }

    // verifica se o ano é bissexto
    private static boolean isLeapYear( int year ) {
        return year % 4 == 0 && year % 100 != 0;
    }

    // verifica qual o maior multiplo da base recebida de um número
    private static int highestMultipleOf( int base, int comparison ) {
        int highestMultiple = 0;

        for ( int i = 0; i <= comparison; i++ ) {
            if ( i % base == 0 ) highestMultiple = i;
        }
        return highestMultiple;
    }

    // pega apenas os ultimos 2 digitos do ano e os retorna como int
    private static int getLastTwo( int year ) {
        String yearStr = Integer.toString( year ); // converte o ano para string

        // converte a string para um array inteiro
        int[] yearArr = yearStr.chars().map(c -> Character.getNumericValue((char) c)).toArray();

        if ( yearArr.length >= 4 ) {
            // junta os 2 ultimos números do yearArr[] em string
            String n = String.valueOf(yearArr[2]) + String.valueOf(yearArr[3]);

            return Integer.parseInt( n ); // converte a string "n" de volta para int
        } else if ( yearArr.length == 3 ) {
            // junta os 2 ultimos números do yearArr[] em string
            String n = String.valueOf(yearArr[1]) + String.valueOf(yearArr[2]);

            return Integer.parseInt( n ); // converte a string "n" de volta para int
        }

        return year;
    }
}
