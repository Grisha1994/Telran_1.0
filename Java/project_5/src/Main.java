import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws InterruptedException {

        Scanner scanner = new Scanner(System.in);

//        int c = scanner.nextInt();
//
//        if (c < 1 || c > 5 ) {
//            System.out.println("Ocenka vne diapazona");
//        } else {
//
//            if (c == 5) {
//                System.out.println("Otlichno");
//            } else if (c == 4) {
//                System.out.println("Horosho");
//            } else if (c == 3) {
//                System.out.println("Udovletvoritelno");
//            } else {
//                System.out.println("Ploho");
//            }
//        }
//
//        for (int i = 10; i > 0; i--){
//            System.out.println(i);
//        }

//        int x = 10, z = 10;                           // Ничего не меняется
//        x++;
//        ++z;
//
//        System.out.println();
//
//        System.out.println("x: " + x + ", z: " + z);
//
//        int x1 = 10, c1 = 10;                              // Форма имеет значение
//        final int y1 = 13 - x1++;
//        final int z1 = 13 - ++c1;
//
//        System.out.println("y: " + y1 + ", z: " + z1);
//
//        MyClass myClass = new MyClass(3);

//        char ex;
//        for (; ; ) {                                     // Оцениваем группу. Пример бесконечного цикла
//            System.out.println("Введите оценку: ");
//            int c = scanner.nextInt();
//
//            if(c < 1 || c > 5) {                             // Проверяем диапазон ввода
//                System.out.println("Оценка вне диапазона ");
//            }
//            else {                                           // Если оценка в диапазоне, переходим к блоку
//                if (c == 5) {                                 // Блок if
//                    System.out.println("Отлично");
//                } else if (c == 4) {
//                    System.out.println("Хорошо");
//                } else if (c == 3) {
//                    System.out.println("Удовлетворительно");
//                } else {
//                    System.out.println("Плохо");
//                }
//            }
//
//            System.out.println("Выберите операцию: " +
//                    "\n c - продолжить " +
//                    "\n e - выход");
//
//            ex = scanner.next().charAt(0);            // Считываем нулевой символ ввода
//
//            if(ex == 'e'){                // Проверяем ввод
//                break;           // Выход из цикла
//            }
//
//        }

//        for (int i = 0; i < 2; i++){
//            for (int j = 0; j < 60; j++) {
//                for (int k = 0; k < 60; k++)
//                    System.out.println(i + ": " + j + ": " + k + ": " );
//                Thread.sleep(1000);
//            }
//        }

        int [] arr = new int[10]; // Создаем массив

        int [] arr1 = {1, 2, 4 ,3, 4}; // Инициализация массива при декларации


        for (int i = 0; i < arr.length; i++) {      // Присваиваем значения элементам массива
            arr[i] = i;
        }

        System.out.println("Вывод первого массива: ");
        print(arr);


        System.out.println("Вывод второго массива: ");
        print(arr1);

    }

    public static void print(int[] arr ){              // Создаю универсальный метод, который будет выводить
        for (int i = 0; i < arr.length; i++){
            System.out.println(arr[i]);                    // массив на консоль
        }

    }
}
