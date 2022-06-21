import java.util.Scanner;

public class ImparPar {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Digite um número");
        int number = input.nextInt();

        if ( (number % 2) != 0 ) {
            System.out.println(number + " é impar!");
        }
        else {
            System.out.println(number + " é par!");
        }

        input.close();
    }
}
