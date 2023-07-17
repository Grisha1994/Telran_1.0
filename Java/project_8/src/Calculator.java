import java.util.Scanner;

public class Calculator {

        public void starCalculations() {
            while (true) {
                System.out.println("Выберите операцию: \n" +
                        "Сложение:  +  \n" +
                        "Вычетание: -  \n" +
                        "Умножение: *  \n" +
                        "Деление:   /  \n" +
                        "Выход: +   e  \n");

                char ch = Main.scanner.next().charAt(0);

                switch (ch){
                    case '+':
                        sum();
                        break;

                    case '-':
                        sub();
                        break;

                    case '*':
                        mul();
                        break;

                    case '/':
                        div();
                        break;
                    case 'e':
                        System.exit(0);
                        break;

                }
            }
        }

    private void div() {
        System.out.println("Введите первое число: ");
        int i = Main.scanner.nextInt();
        System.out.println("Введите второе число: ");
        int i1 = Main.scanner.nextInt();
        System.out.println("Частное: " + i/i1);
    }

    private void mul() {
        System.out.println("Введите первое число: ");
        int i = Main.scanner.nextInt();
        System.out.println("Введите второе число: ");
        int i1 = Main.scanner.nextInt();
        System.out.println("Умноженные значения: " + i*i1);
    }

    private void sub() {
        System.out.println("Введите число: ");
        int i = Main.scanner.nextInt();
        System.out.println("Введите степень: ");
        int i1 = Main.scanner.nextInt();
        System.out.println("Вычитание: " + (i-i1));
    }

    private void sum() {
        System.out.println("Введите первое число: ");
        int i = Main.scanner.nextInt();
        System.out.println("Введите второе число: ");
        int i1 = Main.scanner.nextInt();
        System.out.println("Прибавление: " + (i+i1));

    }


}
