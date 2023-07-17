public class Main {

public static void main(String[] args) {

//    int a;
//    double b;
//
//    a = 21;
//    b = a;
//
//    System.out.println(b);
//
//
//    b = 21.7;
//    a = (int)b ;
//
//    System.out.println(a);
//
//    int x = 1925436346;
//    int y = 1457345546;
//    int i;
//    i = x + y;
//
//    System.out.println(i);
//
//    String str;
//    str = "Chislo " + i;
//
//    System.out.println(str);
//    System.out.println(str.getClass());


    String str = "Привет всем, меня зовут Гриша";
    System.out.println("Реверс строки: " + reverse(str));

    }

    public static String reverse(String str)
    {
        // возвращаем, если строка нулевая или пустая
//        if (str == null || str.equals("")) {
//            return str;
//        }

        // переменная для хранения перевернутой строки
        String rev = "";

        // используем оператор конкатенации строк для создания перевернутой строки с помощью
        // чтение символа с конца исходной строки
        for (int i = str.length() -1; i >=0 ; i--) {
            rev += str.charAt(i);
        }

        return rev;
    }



}
