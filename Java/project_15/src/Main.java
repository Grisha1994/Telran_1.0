import package2.C;
import package4.Сomponents;

import java.awt.*;
import java.util.ArrayList;


public class Main {

    static ArrayList<Integer> arrayList = new ArrayList<>();
    static ArrayList<Сomponents> arrayList1 = new ArrayList<>();

    public static void main(String[] args) {

        C c = new C (12,22,32,42);

        Сomponents components = new Сomponents ("E38", "80", "3", "Mondeo");


        c.print();
        components.printAuto();

        arrayList.add(1);
        arrayList1.add(new Сomponents("Tesla", "Opel", "Syzyki", "Dodge"));
        arrayList1.get(0).printAuto();

    }
}