public class Teste3 {
    public static void teste3() {
        int controle = 1;
        long acumulador = 100;
        boolean condicao;

        System.out.println("\nNumero da itera��o\tCondi��o\tControle\tAcumulador");
        do {
            acumulador -= controle;
            condicao = controle <=10;
            System.out.println("Itera��o "+ controle+ "\t\t\t"+ condicao + "\t\t\t" +
                    controle + "\t\t\t" + acumulador);
            controle++;
        } while(controle <=10);
    }
}
