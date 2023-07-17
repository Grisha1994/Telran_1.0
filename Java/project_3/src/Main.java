import java.util.Scanner;

public class Main {

    static Scanner scanner = new Scanner(System.in);



    public static void main(String[] args) {
//        Car car = new Car (20000, 220.5, "BMW", (short) 12);
//        car.printOut();
//        System.out.println(car.print());
//        String str = car.print();
//        str = str + " Znachenie polei obekta";
//        System.out.println(str);

//          Scanner scanner = new Scanner(System.in);

//        int a;
//        System.out.println("Vvedite znachenie tipa Int");
//        a = scanner.nextInt();
//        System.out.println("Vi vveli: " + a);
//
//        double b;
//        System.out.println("Vvedite znachenie tipa Double");
//        b = scanner.nextDouble();
//        System.out.println("Vi vveli: " + b);
//
//        char c;
//        System.out.println("Vvedite znachenie tipa Char");
//        c = scanner.next().charAt(0);
//        System.out.println("Vi vveli: " + c);

//        String st;
//        System.out.println("Vvedite znachenie tipa String");
//        st = scanner.nextLine();
//        System.out.println("Vi vveli: " + st);

          printInt();

          System.out.println(sum());

    }

    static void printInt() {
        System.out.println("Vvedite znachenie");
        int x = scanner.nextInt();
        System.out.println("Vi vveli " + x);
    }

    public static int sum(){
        System.out.println("Vvedite 1 chislo");
        int a = scanner.nextInt();

        System.out.println("Vvedite 2 chislo");
        int b = scanner.nextInt();
        return a+b;
    }

}
