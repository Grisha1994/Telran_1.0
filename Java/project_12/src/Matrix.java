import java.util.Random;

public class Matrix {

    Random random = new Random();

    public int[][] createMatrix(int row, int col) {
        int[][] mtx = new int[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                mtx[i][j] = random.nextInt(10);
            }
        }
        return mtx;
    }

    public void printMtx(int[][] mtx) throws InterruptedException {
        for (int i = 0; i < mtx.length; i++) {
            for (int j = 0; j < mtx[i].length; j++) {
                System.out.printf("%5d", mtx[i][j]);

            }
            System.out.println();
//            Thread.sleep(500);
        }
    }


    public void findMaxes(int[][] mtx) {
        for (int i = 0; i < mtx.length; i++) {
            int max = mtx[i][0];           // Присваиваем нулевое значение каждой строки в переменную
            for (int j = 0; j < mtx[i].length; j++) {
                if (mtx[i][j] > max) {            // Проверяем, если элемент больше максимального, присваиваем его максимальному
                    max = mtx[i][j];

                }
            }
//            System.out.println("Максимум строки: " + i + " равен " + max);

            for (int j = 0; j < i * 4; j++) {
                System.out.print(" ");
            }
            System.out.println(max);

            for (int j = 0; j > (i-10) * 3; j--) {
                System.out.print(" ");
            }
            System.out.println(max);


        }
    }

    public void findMin(int[][] mtx) {
        for (int i = 0; i < mtx.length; i++) {
            int max = mtx[i][0];           // Присваиваем нулевое значение каждой строки в переменную
            for (int j = 0; j < mtx[i].length; j++) {
                if (mtx[i][j] > max) {            // Проверяем, если элемент больше максимального, присваиваем его максимальному
                    max = mtx[i][j];

                }
            }
            for (int j = 0; j > (i-10) * 4; j--) {
                System.out.print(" ");
            }
            System.out.println(max);
            for (int j = 0; j < i * 4; j++) {
                System.out.print(" ");
            }
            System.out.println(max);
        }
    }



}