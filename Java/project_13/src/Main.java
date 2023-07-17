import java.util.Scanner;

public class Main {
    static Scanner scanner = new Scanner(System.in);

    static StringBuilder stringBuilder = new StringBuilder();
    static StringBuffer stringBuffer = new StringBuffer();

    public static void main(String[] args) {

//        while (true){
//            int a = scanner.nextInt();
//            String str = a >= 10? "Pravilno": "Nepravilno";
//            System.out.println(str);
//
//            System.out.println("Vyiti iz cikla? y - da, n - net" );
//            char c = scanner.next().charAt(0);
//
//            while (c != 'y' && c != 'n'){
//                System.out.println("Неправильный ввод");
//                System.out.println("Выйти из цикла?  y - да, n - нет");
//                c = scanner.next().charAt(0);
//            }
//            if(c == 'y'){
//                break;           // Прервать цикл
//            }
//            if (c == 'n') {
//                continue;        // Продолжить с новой итерации цикла
//            }
//        }

        int a;
        int b;
        a = scanner.nextInt();
        b = scanner.nextInt();
        int c = a > b? a:b;
        System.out.println("a menshe " + c);


//        delete(int start, int end) — удаляет подстроку символов начиная с позиции start, заканчивая end
//        deleteCharAt(int index) — удаляет символ в позиции index
//        insert(int offset, String str) — вставляет строку str в позицию offset. Метод insert также перегружен и может принимать различные аргументы
//        replace(int start, int end, String str) — заменит все символы начиная с позиции start до позиции end на str
//        reverse() — меняет порядок всех символов на противоположный
//        substring(int start) — вернет подстроку, начиная с позиции start
//        substring(int start, int end) — вернет подстроку, начиная с позиции start до позиции end

//        stringBuffer.append("Privet, StringBuffer");
//        System.out.println(stringBuffer);
//
//        String numbers = "0123456789";
//
//        StringBuffer sb = new StringBuffer(numbers);
//
//        System.out.println(sb.substring(6));
//        System.out.println(sb.substring(4, 8));
//        System.out.println(sb.replace(3, 5, "ABCDE"));
//
//        sb = new StringBuffer(numbers);
//        System.out.println(sb.reverse());
//        sb.reverse(); // Вернем изначальный порядок
//
//        sb = new StringBuffer(numbers);
//        System.out.println(sb.delete(5, 9));
//        System.out.println(sb.deleteCharAt(1));
//        System.out.println(sb.insert(1, "One"));
//
//        System.out.println();
//
//        stringBuilder.append("Privet, StringBilder");
//        System.out.println(stringBuilder);
//
//        String number = "0123456789";
//        StringBuilder s = new StringBuilder(number);
//
//        System.out.println(s.substring(3)); //3456789
//        System.out.println(s.substring(4, 8)); //4567
//        System.out.println(s.replace(3, 5, "ABCDE")); //012ABCDE56789
//
//        s = new StringBuilder(number);
//        System.out.println(s.reverse()); //9876543210
//        s.reverse(); // Вернем изначальный порядок
//
//        s = new StringBuilder(number);
//        System.out.println(s.delete(5, 9)); //012349
//        System.out.println(s.deleteCharAt(1)); //02349
//        System.out.println(s.insert(1, "One")); //0One2349


    }
}