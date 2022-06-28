import java.util.Scanner;

public class MaiorValor {
    public static void main(String[] args) {
        Scanner input = new Scanner( System.in );
        int[] number = new int[5];
        int highest, size = number.length;

        for ( int i = 0; i < size; i++ ) {
            System.out.println( "\nDigite um número:" );
            number[i] = input.nextInt();
        }
        highest = number[0];

        for ( int i = 0; i < size; i++ ) {
            if ( number[i] > highest ) {
                highest = number[i];
            }
        }
        System.out.println( "\nO maior número é: " + highest );
        input.close();
    }
}
