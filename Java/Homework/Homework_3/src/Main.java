import java.util.Scanner;

public class Main {

    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {

        print(10, 15);

        System.out.println(sum(32, 14, 10));


        System.out.println(raz());


    }

    static void print(int a, int b) {

        System.out.println(a + " " + b);
    }

    static int sum(int a, int b, int c){
        return a+b+c;
    }


    public static int raz(){
        System.out.println("Введите первое число: ");
        int a = scanner.nextInt();

        System.out.println("Введите второе число: ");
        int b = scanner.nextInt();
        return a-b;
    }
}
