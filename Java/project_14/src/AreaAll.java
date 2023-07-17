public class AreaAll {

    public static double rectangle(double x, double y){
        return x * y;
    }

    public static double triangle(double x, double y){
        return (x * y)/2;
    }

    public static double circle(double x){
        return (x * x) * 3.14;
    }

    public static double polygon(double x, double y, double h){
        return ((x + y)/2) * h;
    }

    public static double hexagon(double x){
        return ((3 * (Math.sqrt(3)) / 2)) * (x * x);
    }

    public static double hexagonalPrism(double x, double h){
        return (3 * h * (x * x) * (Math.sqrt(3))) / 2;
    }

    public static double pow(){
        return Math.sqrt(3);

    }
}
