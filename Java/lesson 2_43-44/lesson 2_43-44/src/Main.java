// Не мертвая зона, потом объясним, что можно писать
public class Main {

    /*
    Теория
    Файл с расширением java, то этот файл содержит java-код.
    Файл с расширением class, такой файд содержит скомпилированный java код - байт
    код(код для jvm)
    IDE - автоматически собирает проект.
    Если мы пишем в блокноте, то проект необходимо собирать вручную.
    Название файла должно совпадать с названием класса в файле.
    Java всегда состоит из классов
    Java классы после компиляции имеют расширение class. Это значит, что файл переведен в байт-код
    Проект - Логически связанная между собой сущность для программы(набор папок, файлов, ресурсов и т.д.)
    Пакет  - логически связанный между собой набор данных
    Класс  - тип, представляет из себя объект реального мира
    Метод  - подпрограмма(часть кода, которая может вызываться многократно), существует понятие функции и процедуры
    Функция - подпрограмма, которая возвращает значение в точку вызова, а процедура - подпрограмма, которая выполняет
    какие-то действия.
    В Java оба вида подпрограмм называются методами, чтобы определить является ли метод функцией или процедурой,
    необходимо посмотреть на его сигнатуру:
     модификатор доступа    модификатор принадлежности   определитель    название         аргументы
          public                    static                  void            main      (String[] args) (сигнатура)

     void  - процедура
     что-либо другое - функция, должна иметь в теле метода слова return и значение
     {} - тело метода.
     Функция в сигнатуре имеет возвращаемый тип вместо void, соответсвенно при помощи оператора return необходимо вернуть
     значение этого типа

     Создание объекта:
     Указываем тип(класс) Называем переменную     =                new                              вызываем конструктор
        Car                     car                  новый(слово выделяющее память под объект)       Car(набор значений)

     */

    /*
    В Intelij Idea есть два полезных полезнызх сочетания клавиш: alt+Enter - если нажать курсором на код с проблемой, это
    сочетание предложит пути решения проблемы, alt+ins(insert), если с ноутбука, то alt+fn+ins - позволяет генерировать
    базовые участки кода
     */



    public static void main(String[] args) {

        print(10, 15);                                        // Вызываем процедуру

        print(13, 17);

        printDouble(12.5, 35.4);

        System.out.println(sum(12, 5));                      // Вызываем функцию

        System.out.println(sub(12, 5));

        Car car = new Car(10000, 200, "Фольксваген");        // Создаем объект
         //Получаем значения полей класса и выводим их на консоль
        System.out.println("price = " + car.getPrice() + " speed = " + car.getSpeed() + " brand = " + car.getBrand());
        //Изменения значения поля(свойства) объекта
        car.setPrice(15000);
        System.out.println("price = " + car.getPrice() + " speed = " + car.getSpeed() + " brand = " + car.getBrand());

        car.printOut();

        Car car1 = new Car(20000, 220, "Бугати");        // Создаем объект

        car1.printOut();

    }

    static int sub(int a, int b) {
        return a - b;
    }


    static void print(int a, int b){                         // Определяем процедуру
        System.out.println("a = " + a + " b = " + b);
    }

    static void printDouble(double a, double b){
        System.out.println("a = " + a + " b = " + b);

    }

    static int sum(int a, int b){                         // Определили функцию
     return a+b;
    }

    /*
    ДЗ
    1) Создать процедуру
    2) Создать функцию.
    3) Создать класс
    4*) Добавить геттеры и сеттеры, продемонстрировать их работу
    5**) Добавить в класс функцию для вывода свойств класса. Вызвать ее в методе main
     */



}