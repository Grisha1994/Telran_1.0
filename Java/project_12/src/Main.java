import java.util.Random;

public class Main {

    static Random random = new Random();
    static int[][] mtx = new int [10][10];

    public static void main(String[] args) throws InterruptedException, CloneNotSupportedException {



        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                    mtx[i][i] = random.nextInt(10);
                    System.out.print(mtx[i][j] + "  ");
            }
            System.out.println();
//            Thread.sleep(500);
        }

        System.out.println("Новая матрица: ");


        Matrix matrix = new Matrix();
        int[][] mtx = matrix.createMatrix(10, 10);
        matrix.printMtx(mtx);
        matrix.findMaxes(mtx);
        matrix.findMin(mtx);



        int a = 10;
        int b =10;

        Human h1 = new Human(22, "Vlada", 'f');
        Human h2 = new Human(22, "Vlada", 'f');

        System.out.print("Сравниваем одинаковые int: ");
        System.out.println(a == b);

        System.out.print("Сравниваем одинаковые human: ");
        System.out.println(h1.equals(h2));
        System.out.println();

        Human h3 = h1;
        System.out.println(h1);
        System.out.println(h3);
        System.out.println();

        h3.setSex('m');
        System.out.println(h1);
        System.out.println(h3);
        System.out.println();

        Human h4 = (Human) h2.clone();
        System.out.println(h2);
        System.out.println(h4);
        System.out.println();

        h2.setAge(23);
        System.out.println(h2);
        System.out.println(h4);


    }
}