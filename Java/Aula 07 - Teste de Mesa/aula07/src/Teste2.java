public class Teste2 {
    public static void teste2() {
        int controle = 10;
        long acumulador = 1;
        boolean condicao;

        System.out.println("\nNumero da itera��o\tCondi��o\tControle\tAcumulador");
        while (controle > 0) {
            int iteracao = 10 - controle + 1;

            acumulador *= controle;
            condicao = controle > 0;

            System.out.println("Itera��o "+ iteracao+ "\t\t\t"+ condicao + "\t\t\t"
                    + controle + "\t\t\t" + acumulador);

            controle--;
        }
    }
}
