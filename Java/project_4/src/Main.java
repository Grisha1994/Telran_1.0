import java.util.Locale;

public class Main {

    public static void main(String[] args) {
        int a;
        double b;

        b = 15.7;
        a = (int)b;
        System.out.println(a);

        a = 17;
        b = a;
        System.out.println(b);

        int x;
        double y;

        y = 24.8;
        x = (int)y;
        System.out.println(x);

        x = 32;
        y = x;
        System.out.println(y);

        char s;
        int t;

        t = 325;
        s =(char)t;
        System.out.println(s);

        s = 'A';
        t = s;
        System.out.println(t);

        int i = 2000000000 + 1000000000;
        System.out.println(i);

        int e = 2000000000;
        int c = 1000000000;
        i = e+c;

        long l = (long)e+(long)c;
        System.out.println(l);

        String str;
        str = "" + i;
        System.out.println(str);

        System.out.println(str.getClass());

        str = "";

        str ="Privet";
        str += " Poka";
        System.out.println(str);

        str = str + " I ochen daleko";
        System.out.println(str);


        System.out.println(str.toUpperCase());
        System.out.println(str.toLowerCase());

        str = "  " + str + "  ";
        System.out.println(str);

        System.out.println(str.trim());

        System.out.println(str.length());

        String subStr = str.substring(8);
        System.out.println(subStr);

        subStr = str.substring(9, 14);
        System.out.println(subStr);

        System.out.println(str.charAt(14));


        for (int j = 0; j < str.length(); j++ ){     // Для тех кто знает циклы показываю разбор строки на символы.
            System.out.println(str.charAt(j));
        }

        for (int j = 0; j < str.length(); j++ ){     // Для тех кто знает циклы показываю разбор строки на символы.
            if(str.charAt(j) == 'I' || str.charAt(j) == 'i' ){   // Для тех кто знаком с условными операторы
                System.out.println(str.charAt(j));
            }
        }


        System.out.println(str.replace('I', 'i'));


    }
}
