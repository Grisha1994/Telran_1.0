public class Main {
    public static void main(String[] args) {
        print(10, 15);
        print(13, 17);

        printDouble(12.5, 15.3);
        printDouble(17.6, 14.3);

        System.out.println(sum(12, 15));
        System.out.println(raz(12, 15));

        Car car = new Car(10000, 200, "BMV");

        System.out.println("price = " + car.getPrice() + " speed =" + car.getSpeed() + " brand =" + car.getBrand());

        car.setPrice(15000);
        System.out.println("price = " + car.getPrice() + " speed = " + car.getSpeed() + " brand = " + car.getBrand());

        car.printOut();

        Car car1 = new Car(135000, 130, "Syzyki");
        car1.printOut();
    }
    static void print(int a, int b) {

        System.out.println("a = " + a + " b = " + b);
    }

    static void printDouble(double a, double b) {

        System.out.println("a = " + a + " b = " + b);
    }

    static int sum(int a, int b) {
        return a+b;
    }

    static int raz(int a, int b) {
        return a-b;
    }
}
