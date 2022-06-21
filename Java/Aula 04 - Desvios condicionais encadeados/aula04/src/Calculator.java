import java.util.Scanner;

public class Calculator {
    public static void main( String[] args ) {
        System.out.println( "======= Calculadora ========" );
        Scanner input = new Scanner( System.in );

        System.out.println( "Digite um número" );
        double num1 = input.nextDouble();

        System.out.println( "Digite outro número" );
        double num2 = input.nextDouble();

        System.out.println( "======= Operadores Matemáticos ========" );
        System.out.println( " + Somar os números ");
        System.out.println( " - Subtrair os números ");
        System.out.println( " * multiplicar os números ");
        System.out.println( "======== Escolha uma opção =========" );

        String oper = input.next();

        switch ( oper ) {
            case "+":
                double soma = num1 + num2;
                System.out.println( "Voce escolheu adição");
                System.out.println( "O número " + num1 + " + " + num2 + " = " + soma );
                break;
            case "-":
                double sub = num1 - num2;
                System.out.println( "Voce escolheu subtração" );
                System.out.println( "O número " + num1 + " - " + num2 + " = " + sub );
                break;
            case "*":
                double multi = num1 * num2;
                System.out.println( "Voce escolheu multiplicação" );
                System.out.println( "O número " + num1 + " * " + num2 + " = " + multi );
                break;
            default:
                System.out.println( "Operação não disponível ou inválida!" );
        }

        input.close();
    }
}
