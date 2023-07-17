import java.util.Scanner;

public class Main {

    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {

        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int c = scanner.nextInt();

        int d = findMin1(a, b, c);
        System.out.println(d);

        int e = findMin2(a, b, c);
        System.out.println(e);

    }





    static int findMin1(int a, int b, int c) {
        if ( a >= b && a >= c) {
            return a;
        } else if ( b >= c ) {
            return b;
        } else {
            return c;
        }
    }
        static int findMin2(int a, int b, int c) {
            if ( a <= b && a <= c) {
              return a;
             } else if ( b <= c ) {
                return b;
             } else {
                return c;
            }
        }

        static int findMin3(int a, int b, int c) {
        return Math.min(Math.min(a, b), Math.min(b, c));
        }

}
