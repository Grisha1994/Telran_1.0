public class Main {
//    public String name;
//
//    public Main(String name) {
//        this.name = name;
//    }
//
//    public void printName() {
//        String name = "absbsbbs";
//        System.out.println(name + " " + this.name);
//    }
    public static void main(String[] args) {

        ThisTest t = new ThisTest("Grisha");
        System.out.println(t.getName(t));
        System.out.println(t.thisGetName());

//                Main m = new Main("Test name");
//                Main m1 = new Main("Test");
//                Main m2 = new Main("This test");
//                System.out.println(m.name);
//                m.printName(); // this = m
//
//                System.out.println("========================");
//
//                System.out.println(m1.name);
//                m1.printName(); // this = m1
//
//
//                m2.printName(); // this = m2


            }
}