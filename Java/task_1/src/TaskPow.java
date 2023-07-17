public class TaskPow {

    public static void  main(String[] args){

        int x =3;
        int y =4;
        double z = powerMethod(x, y);
        double sqrt = sqrtMethod(x);

        System.out.println("z = " + z);
        System.out.println("sqrt = " + sqrt);
    }

    private static double sqrtMethod(int x) {
        double z = 1.0/3.0;
        return Math.pow(x, z);
    }

    private static double powerMethod(int x, int y){

        return Math.pow(x, y);
    }
}
