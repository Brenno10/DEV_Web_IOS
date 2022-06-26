import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    private static Scanner input = new Scanner( System.in );
    private static float base;
    private static ArrayList<String> name = new ArrayList<>();
    private static ArrayList<Float> percent = new ArrayList<>();
    private static boolean start = true;

    public static void main(String[] args) {
        System.out.println( "\nCalcule todas as porcentagens de algum valor" );
        System.out.println( " - digite 'stop' para finalizar as porcentagens" );
        while ( start ) {
            System.out.println( "\nDigite o nome e a porcentagem" );
            String newInput = input.nextLine();

            if ( newInput.equals( "stop" ) ) start = false;
            else stringSpliter( newInput );
        }
        System.out.println( "\nDigite a base a ser calculada" );
        base = input.nextFloat();

        for ( int i = 0; i < name.size(); i++ ) {
            System.out.println(
                    name.get( i ) + ": " +
                    ( percent.get( i ) * 100 ) + "% " + Math.abs( base ) + " = " + result( i ) );
        }
        input.close();
    }

    // resultado da porcentagem
    private static float result( int index ) {
        return Math.abs( base ) * percent.get( index );
    }

    // divide o nome e a porcentagem e os adiciona aos seu respectivos arrays
    private static void stringSpliter( String toSplit ) {
        String fixedStr = toSplit.replaceAll( "[:%]", " " ); // substitui : e % por espaço
        String trimStr = fixedStr.replaceAll("\s+"," "); // deixa apenas um espaço
        String[] splitedStr = trimStr.split( " " );

        if ( splitedStr.length == 2 ) {
            name.add( splitedStr[0] );
            percent.add( toPercent( turnIntoNumber( splitedStr[1] ) ) );
        }
        else if ( splitedStr.length == 1 && isNumber( splitedStr[0] ) ){
            name.add( "none" );
            percent.add( toPercent( turnIntoNumber( splitedStr[0] ) ) );
        }
        else if ( splitedStr.length == 0 ) {
            System.out.println( "digite alguma coisa!" );
        }
    }

    // converte o número para porcentagem
    private static float toPercent( float raw ) {
        return raw / 100;
    }

    // converte string para float
    private static float turnIntoNumber( String num ) {
        return Float.parseFloat( num.replaceAll( ",", "." ) );
    }

    // verifica se é um número
    private static boolean isNumber( String num ) {
        String fixedNum = num.replaceAll( ",", "." );
        return fixedNum.matches("[+-]?\\d*(\\.\\d+)?" );
    }
}
