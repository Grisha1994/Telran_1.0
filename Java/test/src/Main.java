import java.util.Random;

public class Main {
    public static void main(String[] args) {

        Random random = new Random();

            Human[] arr = new Human[10];
            System.out.println();
//            arr[0] = new Human("Vlad", 24);
//            arr[1] = new Human("Sveta", 25);
//            arr[2] = new Human("Sveta", 25);

            System.out.print(arr);



            for (int i = 0; i < arr.length; i++) {
                String[] strArr = {"Masha", "Vanya", "Lena"};
                int r = random.nextInt(3);
                String name = strArr[r];
                System.out.println("Имя: " + name);
            }

    }
}