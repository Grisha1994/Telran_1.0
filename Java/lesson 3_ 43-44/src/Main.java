import java.util.Scanner;

public class Main {

    /*
    План заданий
    1) Разбор домашнего задания
    2) Консольный ввод
    3) Разбор теории в связи с практикой.
     */

    /*
    Теория
    Функция возвращает значение, которое потом можно как-либо использовать
    Процедура выполняет какие-либо действия
    Для консольного ввода в Java существует класс Scanner
    Чтобы ввести данные необходимо создать объект класса Scanner:

    Scanner scanner = new Scanner(System.in);
    Локальная переменная - переменная определенная в теле метода, она видна только в пределах этого метода
    Глобальная переменная - переменная, определенная в границах класса, но не в одном из методов. Такая переменная будет
    доступна в каждом методе класса
    static - модификатор, который указывает на то, что эта переменная или метод принадлежит классу

     */

    /*
    Задача
    Разработать класс, добавить: поля, аксессоры, функцию для вывода полей
     */

    /*
    Приведение типа - преобразование одного типа в другой в Java делается по схеме: (тип к которому приводим)исходный тип
     */

    static Scanner scanner = new Scanner(System.in);     //  Создаем объект для ввода данных

    public static void main(String[] args) {

        Car car = new Car(20000, 220.5, "Бугати", (short)12);
        car.printOut();                        // Вызываем процедуру
        System.out.println(car.print());       // Вызываем функцию
                             // Создаю переменную типа String и присваиваю ей значений полей объекта при помощи функции print
        String str = car.print();       // Получаем значение полей в строку;

        str = str + " Вот такое значение полей объекта";    // Добавляю строку к полям объекта

        System.out.println(str);                   // Вывожу новую строку


//        int a;                          // Декларация переменной



//        System.out.println("Введите значение типа int: ");
//         a = scanner.nextInt();                       // Считываем в переменную a введенное значение (инициализация)
//
//        System.out.println("Вы ввели: " + a);        // Выводим введенную переменную на консоль
//
//
//
//        double b;
//
//        System.out.println("Введите значение типа double: ");
//        b = scanner.nextDouble();                       // Считываем в переменную b введенное значение (инициализация)
//
//        System.out.println("Вы ввели: " + b);        // Выводим введенную переменную на консоль
//
//
//        char c;
//        char c1;
//
//        System.out.println("Введите значение типа char: ");
//        c = scanner.next().charAt(0);          // Считываем первый символ
//        c1 =  scanner.next().charAt(1);        // Считываем второй символ
//        System.out.println("Вы ввели: " + c);
//        System.out.println("Вы ввели: " + c1);
//
//
//        String str1 = " ";                     // Декларируем
//
//        System.out.println("Введите строку: ");
//        str1 = scanner.next();                        // Считываем строку
//
//        System.out.println("Строка: " + str1);
//
//        String str2 = " ";                           // Декларируем
//
//        System.out.println("Введите строку: ");
//        str2 = scanner.nextLine();                     // Считываем следующую строку
  //
 //       System.out.println("Следующая строка: " + str2);

//        String st;
//        System.out.println("Vvedite znachenie tipa String");          // Пример работы с nextLine()
//        st = scanner.nextLine();
//        System.out.println("Vi vveli: " + st);


        System.out.print("Привет, группа 44-43 \n Меня зовут Влад!" + "\n");

//         printInt();

         System.out.println(sum());

    }

    static void printInt(){
        System.out.println("Введите значение: ");
        int a = scanner.nextInt();
        System.out.println("Вы ввели: " + a);
    }

    public static int sum(){
//        System.out.println("Введите первое число: ");
        int a = scanner.nextInt();

//        System.out.println("Введите второе число: ");
        int b = scanner.nextInt();
        return a+b;
    }
}
