import java.util.Random;
import java.util.Scanner;

public class Main {

    static Random random = new Random();




    public static void main(String[] args) {

        int[] arr = new int[10];

        for (int i = 0; i < arr.length; i++) {
            arr[i] = random.nextInt(10);
            System.out.print(arr[i] + " ");
        }
        System.out.println();


        int[] arr1 = createArray(10, 16);
        printArray(arr1);

        arr1 = sortArr(arr1);

        printArray(arr1);


        Scanner scanner = new Scanner(System.in);

        while (true){           // Классический пример бесконечного цикла
            System.out.println("Введите операцию: \n" +      // Выводим варианты запросов
                    "Умножение - *\n" +
                    "Деление - /\n"  +
                    "Возведение в степень - ^\n" +
                    "Извлечение квадратного корня - s\n" +
                    "Выход - e \n");
            char ch = scanner.next().charAt(0);          // Считываем запрос
            if (ch == '*') {                  //Обрабатываем запросы
                System.out.println("Введите первое число: ");
                int i = scanner.nextInt();
                System.out.println("Введите второе число: ");
                int i1 = scanner.nextInt();
                multiply(i, i1);
            }
            else if(ch == '/'){
                System.out.println("Введите первое число: ");
                int i = scanner.nextInt();
                System.out.println("Введите второе число: ");
                int i1 = scanner.nextInt();
                div(i, i1);
            }
            else if(ch == '^'){
                System.out.println("Введите число: ");
                int i = scanner.nextInt();
                System.out.println("Введите степень: ");
                int i1 = scanner.nextInt();
                power(i, i1);
            }
            else if(ch == 's'){
                System.out.println("Введите первое число: ");
                int i = scanner.nextInt();
                sqrt(i);
            }

            if(ch == 'e'){     // Выходим из цикла
                break;
            }
        }


    }


    private static void sqrt(int i) {
        System.out.println("Корень: " + Math.sqrt(i));   // Извлекаем корень
    }


    private static void power(int i, int i1) {
        System.out.println("Степень: " + Math.pow(i, i1)); // Возводим в степень
    }

    private static void div(int i, int i1) {
        System.out.println("Частное: " + i/i1);
    }

    private static void multiply(int i, int i1) {
        System.out.println("Умноженные значения: " + i*i1);
    }



    private static int[] sortArr(int[] arr) {

        int temp;
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }


    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static int[] createArray(int size, int bound) {
        int[] arr = new int[size];

        for (int i = 0; i < arr.length; i++) {
            arr[i] = random.nextInt(bound);
        }
        return arr;
    }




}