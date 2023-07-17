public class Car {

    int a;     // По умолчанию примитивные типы равны 0
    double b;

    public Car(double b) {
        this.b = b;
    }

    public int getA() {
        return a;
    }

    public double getB() {
        return b;
    }

    public void printA(){
        System.out.println(a);
    }

    public void printAB(){
        System.out.println(a + " " + b);
    }

    public double sum(){
        return  a+ b;
    }
}
