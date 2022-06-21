import java.util.Scanner;

public class Main {
    public static void main ( String [] args ) {
        // Criar Scanner e instanciar o objeto
        // Scanner cria um buffer para armazenar dados temporários na memória do computador como variáveis
        // o objeto System.in, faz a leitura doque foi escrito no console
        Scanner teclado = new Scanner(System.in);

        // Declarar as variáveis
        System.out.println("Digite o nome do aluno");
        String aluno;
        // .nextLine() retorna oque for escrito no console como uma variável String
        aluno = teclado.nextLine();

        // Declarar variáveis para receber os valores
        // voce pode declarar o tipo de mais de uma variável ao mesmo tempo
        double nota1, media;

        System.out.println("Digite duas notas");
        // .nextDouble() retorna oque for escrito no console como uma variável Double
        nota1 = teclado.nextDouble();
        double nota2 = teclado.nextDouble();

        // Fazer a média do aluno
        media = (nota1 + nota2) / 2;

        // mostrar informações do usuário
        System.out.println
                ("O aluno " + aluno + " " + "tirou " + nota1 + " " + nota2 + " " + "e tem á média de: " + media);

        // Close do teclado
        teclado.close();
    }
}
