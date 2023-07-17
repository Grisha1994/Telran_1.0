import java.util.Scanner;

public class Main {
    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {

//        double x;
//        double a = 0;
//        Solver.linearEquation(x, a);

        do{
            System.out.println("Do");
        }
        while (10 < 9);

        Solver solver = new Solver();
        System.out.println("Koren: " + solver.linearEquation(2,10));

        System.out.println("Введите первый параметр: ");
        int a = scanner.nextInt();

        System.out.println("Введите второй параметр: ");
        int b = scanner.nextInt();

        System.out.println("Введите третьий параметр: ");
        int c = scanner.nextInt();


        if(a != 0) {
            if (solver.isRoots(solver.findDiscriminant(a, b, c))) {
                if (solver.isTwoRoots(solver.findDiscriminant(a, b, c))) {
                    double[] arr = solver.doubleRoot(a, b, solver.findDiscriminant(a, b, c));
                    System.out.println("Pervii koren " + arr[0]);
                    System.out.println("Vtoroi koren " + arr[1]);
                } else {
                    System.out.println("Odin koren " + solver.singleRoot(a, b, solver.findDiscriminant(a, b, c)));
                }
            } else {
                System.out.println("Kornei net ");
            }
        }else {
            System.out.println("Nekorectnii vvod ");
        }

    }
}