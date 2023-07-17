public class Main {
    public static void main(String[] args) {
        int a = 1000;
        System.out.print("int = " + a + "\n");

        long b = 10000000000000l;
        System.out.print("long = " + b + "\n");

//        System.out.println("\n" + a + " " + b);
        double c = 15.4;
        System.out.println("double = " + c);

        float d = 13.4f;
        System.out.println("float = " + d);

        char e = 'f';
        System.out.println("char = " + e);

        boolean f = true;
        System.out.println("boolean = " + f + "\n");


//        System.out.printf("%5d %5.3f %5c %5b", a, c, e, f);
        System.out.printf(" int  long           double  float char boolean"+ "\n");
        System.out.printf("%5d %5d %5.3f %5.1f %2c %7b", a, b, c, d, e, f);
    }
}