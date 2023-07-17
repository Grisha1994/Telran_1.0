package package1;

public class A {

    public int a;     // Модификаторы доступа для переменных
    int b;
    protected int c;
    private int d;

    public A(int a, int b, int c, int d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    public void printA(){       // Модификаторы доступа для методов

    }

    void printB(){

    }

    protected void printC(){

        System.out.println("Hello");
    }

    private void printD(){

    }
}
