import java.util.Random;
import java.util.Scanner;

public class Main {

    static Random random = new Random();

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        while (true){           // Классический пример бесконечного цикла
            System.out.println("Введите операцию: \n" +      // Выводим варианты запросов
                    "Умножение - *\n" +
                    "Деление - /\n"  +
                    "Прибавление - +\n" +
                    "Вычитание - -\n" +
                    "Извлечения корня 3  - k\n" +
                    "Возведение в степень - ^\n" +
                    "Выход - e \n");
            char ch = scanner.next().charAt(0);          // Считываем запрос
            if (ch == '*') {                  //Обрабатываем запросы
                System.out.println("Введите первое число: ");
                int i = scanner.nextInt();
                System.out.println("Введите второе число: ");
                int i1 = scanner.nextInt();
                System.out.println("Умноженные значения: " + i*i1);
            }
            else if(ch == '/'){
                System.out.println("Введите первое число: ");
                int i = scanner.nextInt();
                System.out.println("Введите второе число: ");
                int i1 = scanner.nextInt();
                System.out.println("Частное: " + i/i1);
            }
            else if(ch == '+'){
                System.out.println("Введите число: ");
                int i = scanner.nextInt();
                System.out.println("Введите степень: ");
                int i1 = scanner.nextInt();
                System.out.println("Прибавление: " + (i+i1));
            }
            else if(ch == '-'){
                System.out.println("Введите число: ");
                int i = scanner.nextInt();
                System.out.println("Введите степень: ");
                int i1 = scanner.nextInt();
                System.out.println("Вычитание: " + (i-i1));
            }

            else if(ch == 'k'){
                System.out.println("Введите число: ");
                int i = scanner.nextInt();
                System.out.println("Степень: " + Math.pow(i, 1./3.));
            }

            else if(ch == '^'){
                System.out.println("Введите число: ");
                int i = scanner.nextInt();
                System.out.println("Введите степень: ");
                int i1 = scanner.nextInt();
                System.out.println("Степень: " + Math.pow(i, i1));
                double i3 = Math.pow((Math.pow(i, i1)), 1./3.);
                System.out.println("Степень: " + i3);
            }

            if(ch == 'e'){     // Выходим из цикла
                break;
            }
        }

//        int[] arr = createArray(20, 30);
//        printArray(arr);
//
//        arr = sortArr(arr);
//        printArray(arr);
//
//        arr = sortArr1(arr);
//        printArray(arr);

    }

//    private static int[] sortArr1(int[] arr) {
//
//        int temp;
//        for (int i = 0; i < arr.length; i++) {
//            for (int j = 0; j < arr.length; j++) {
//                if (arr[i] > arr[j]) {
//                    temp = arr[i];
//                    arr[i] = arr[j];
//                    arr[j] = temp;
//                }
//            }
//        }
//        return arr;
//    }
//
//    private static int[] sortArr(int[] arr) {
//
//        int temp;
//        for (int i = 0; i < arr.length; i++) {
//            for (int j = 0; j < arr.length; j++) {
//                if (arr[i] < arr[j]) {
//                    temp = arr[i];
//                    arr[i] = arr[j];
//                    arr[j] = temp;
//                }
//            }
//        }
//        return arr;
//    }
//
//
//    public static void printArray(int[] arr) {
//        for (int i = 0; i < arr.length; i++) {
//            System.out.print(arr[i] + " ");
//        }
//        System.out.println();
//    }
//
//    public static int[] createArray(int size, int bound) {
//        int[] arr = new int[size];
//
//        for (int i = 0; i < arr.length; i++) {
//            arr[i] = random.nextInt(bound);
//        }
//        return arr;
//    }



}