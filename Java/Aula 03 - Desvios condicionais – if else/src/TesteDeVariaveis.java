/*
 alt + shift + insert para seleceionar mais de uma linha ao mesmo tempo
 o java é mais estrito que o JS, e não permite chamar uma variavel ou método antes de chama-los
*/

public class TesteDeVariaveis {
    // Método é o equivalente de função no JS e também é indicado por ()
    // Método main inicia a execução do aplicativo Java
    public static void main ( String [] args ) {
        // Variáveis

        // float é para 32 bits
        // float é mais rápido que double, porém menos preciso
        // float só aceita números decimais
        // float requer (float) na frente ou f no final para ser declarado como número decimal
        float first = 1.2f;

        // double é para 64 bits
        // double é mais preciso que float, porém mais lento
        // normalmente usado quando o número decimal é desconhecido, como pi
        // double aceita números decimais
        // todas declarações de números decimais são double se não forem declaradas como float
        double second = 1.1;

        // boolean aceita apenas true ou false
        // é possivel usar  resultados de condições
        boolean third = (3 < 4);

        // String aceita apenas coisas escritas entre ""
        String fourth = "asd 3";

        // int aceita apenas números inteiros
        int fifth = 3;

        // char aceita apenas um caractére entre ''
        char sixth = 's';

        // long aceita valores de números inteiros maiores que int não pode conter
        long seventh = 6;

        System.out.println("Hello World!");
        System.out.println("Minha Idade é " + 20 + "anos");
        System.out.println("O resultado é: " + (3 + 5 <= 22));
        System.out.println(
                first + ", " +
                second + ", " +
                third + ", " +
                fourth + ", " +
                fifth + ", " +
                sixth + ", " +
                seventh
        );
    }
}
