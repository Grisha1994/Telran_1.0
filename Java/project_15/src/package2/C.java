package package2;

import package1.A;

public class C extends A {

    public C (int a, int b, int c, int d) {
        super (a, b, c, d);
        A aObj = new A(1, 2, 3, 4);
        System.out.println("A - a " + aObj.a);
        System.out.println("A - c " + super.c);
    }

    public void print(){
        super.printC();
    }
}