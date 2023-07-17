public class Solver {

    public static double linearEquation(double x, double a){
        return a/x;
    }

    public double findDiscriminant(double a, double b, double c){
        return Math.pow(b, 2) - 4*a*c;      //b*b - 4*a*c;
    }

    public boolean isRoots(double discriminant){
        if(discriminant < 0){
            return false;
        }else{
            return true;
        }
    }
    public boolean isTwoRoots(double discriminant){
        if(discriminant == 0){
            return false;
        }else{
            return true;
        }
    }
    public  double singleRoot(double a, double b, double discriminant){
        return (-b + Math.sqrt(discriminant))/(2*a);
    }
    public double[] doubleRoot(double a, double b, double discriminant){
        double[] arr = new double[2];
        arr[0] = singleRoot(a, b, discriminant);
        arr[1] = (-b - Math.sqrt(discriminant))/(2*a);

        return arr;
    }
}
