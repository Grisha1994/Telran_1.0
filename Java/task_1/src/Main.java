import java.util.Scanner;

public class Main {


    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {


        int[] intArray = new int[10];
        intArray[3] = 7;
        double[] doudleArray = new double[10];
        String[] stringArray = new String[10];

        int i = intArray[7];
        System.out.println(i);
//        String s = stringArray[7];
//        System.out.println(s.length());


        printIntArray(intArray);
        printDoubleArray(doudleArray);
        printStringArray(stringArray);


        System.out.println("Program to sum values");
        System.out.println("Please enter integer to sum");

        int sum = 0;
        while (true) {
            String nextLine = scanner.nextLine();
            if ("q".equals(nextLine)) break;
            sum = sum + Integer.parseInt(nextLine);
            System.out.println("Sum = " + sum);
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

    public static void printStringArray(String[] strings) {
        for (int i = 0; i < strings.length; i++) {
            System.out.print(strings[i] + " ");
        }
    }

}