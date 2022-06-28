import java.util.Random;

public class FindRandomSmallest {
    private static Random rand = new Random();
    private static int[] randNum = new int[10];

    public static int randSmallest() {
        int smallsetsNumber;

        for ( int i = 0; i < randNum.length; i++ ) {
            randNum[i] = rand.nextInt(10);
        }
        smallsetsNumber = randNum[0];

        for ( int i = 0; i < randNum.length; i++ ) {
            if ( randNum[i] < smallsetsNumber ) {
                smallsetsNumber = randNum[i];
            }
        }
        return smallsetsNumber;
    }
}
