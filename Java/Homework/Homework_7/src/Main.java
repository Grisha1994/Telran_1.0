import java.util.Random;
import java.util.Scanner;

public class Main {

    static Scanner scanner = new Scanner(System.in);
    static Random random = new Random();

    static StringBuilder stringBuilder = new StringBuilder();
    static StringBuffer stringBuffer = new StringBuffer();


    public static void main(String[] args) {

//        int a = scanner.nextInt();
//        int b = scanner.nextInt();
//        int c = scanner.nextInt();
//
//
//        int sum = sum(a,b);
//        System.out.println("Summa chisel: " + sum);
//
//       min(c, sum);
//
//
//        int e = scanner.nextInt();
//        switch (e){
//
//            case 1:
//                System.out.println("e = 1 из switch");
//            case 4:
//                System.out.println("e = 4 из switch");
//                break;
//            case 6:
//                System.out.println("e = 6 из switch");
//                break;
//            case 7:
//                System.out.println("e = 7 из switch");
//                break;
//            case 8:
//                System.out.println("e = 8 из switch");
//                break;
//
//            default:
//                System.out.println("error");
//        }


        int[] arr = new int[5];

        int[] sum = arr;



        System.out.println(arrayRandom(arr));
        System.out.println(arrRandom(arr));

        Area solver = new Area();
        double x = scanner.nextDouble();
        double y = scanner.nextDouble();
        System.out.println("Ploschad priamoygolnica: " + Area.rectangle(x,y));
        System.out.println("Ploschad treygolnika: " + Area.triangle(x,y));
        System.out.println("Ploschad kryga: " + Area.circle(x));






        stringBuffer.append("Privet, StringBuffer");
        System.out.println(stringBuffer);

        String numbers = "0123456789";

        StringBuffer sb = new StringBuffer(numbers);

        System.out.println(sb.substring(6));
        System.out.println(sb.substring(4, 8));
        System.out.println(sb.replace(3, 5, "ABCDE"));

        sb = new StringBuffer(numbers);
        System.out.println(sb.reverse());
        sb.reverse(); // Вернем изначальный порядок

        sb = new StringBuffer(numbers);
        System.out.println(sb.delete(5, 9));
        System.out.println(sb.deleteCharAt(1));
        System.out.println(sb.insert(1, "One"));

        System.out.println();

        stringBuilder.append("Privet, StringBilder");
        System.out.println(stringBuilder);

        String number = "0123456789";
        StringBuilder s = new StringBuilder(number);

        System.out.println(s.substring(3)); //3456789
        System.out.println(s.substring(4, 8)); //4567
        System.out.println(s.replace(3, 5, "ABCDE")); //012ABCDE56789

        s = new StringBuilder(number);
        System.out.println(s.reverse()); //9876543210
        s.reverse(); // Вернем изначальный порядок

        s = new StringBuilder(number);
        System.out.println(s.delete(5, 9)); //012349
        System.out.println(s.deleteCharAt(1)); //02349
        System.out.println(s.insert(1, "One")); //0One2349


    }


    static int sum(int a, int b) {
        return a + b;
    }

    public static void min(int c, int sum) {
        if (sum >= c) {
            System.out.println("Summa bolhe zadonnogo znacheniya: " + sum);
        } else {
            System.out.println("Summa menshe zadonnogo znacheniya: " + c);
        }
    }

    public static int arrayRandom(int[] arr) {
        int s = 0;
        for (int i = 0; i < arr.length; i++) {
            arr[i] = random.nextInt(20);
            System.out.print(arr[i] + " ");
            s += arr[i];
        }
        System.out.println();
        return s;
    }

    public static int arrRandom(int[] arr) {
        int p = 1;
        for (int i = 0; i < arr.length; i++) {
            p *= arr[i];
        }
        return p;

    }
}