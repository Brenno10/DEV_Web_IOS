import java.util.Scanner;

public class Triangle {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Base do triângulo");
        float base = input.nextFloat();

        System.out.println("Altura do triângulo");
        float height = input.nextFloat();

        float area = (base * height) / 2;

        System.out.println("A área é: " + area);

        input.close();
    }
}
