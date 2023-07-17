import java.util.Scanner;

public class Main {

    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {

        int[] intArray = new int[10];
        double[] doudleArray = new double[10];


        printIntArray(intArray);
        printDoubleArray(doudleArray);

        System.out.println("Program to sum and raz values");
        System.out.println("Please enter integer to number");

        int sum = 0;
        int raz;
        while (true) {
            String nextLine = scanner.nextLine();
            if ("q".equals(nextLine)) break;
            sum = sum + Integer.parseInt(nextLine);
            System.out.println("Sum = " + sum);
            raz = sum - Integer.parseInt(nextLine);
            System.out.println("Sum - raz = " + raz);
            System.out.println("Please enter integer to sum. Press q to finish");
        }

    }
    public static void printIntArray(int[] ints) {
        for (int i = 0; i < ints.length; i++) {
            System.out.print(ints[i] + " ");

        }
        System.out.println();
    }
    public static void printDoubleArray(double[] doubles) {
        for (int i = 0; i < doubles.length; i++) {
            System.out.print(doubles[i] + " ");
        }
        System.out.println();
    }
}