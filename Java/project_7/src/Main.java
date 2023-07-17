public class Main {

    static int[] arr = new int[15];
    static int[] sub;
    static int count;

    public static void main(String[] args) {


        int[] a = new int[10];

        for (int i = 0; i < a.length; i++) {
            a[i] = i;
            System.out.print(a[i] + " ");
        }
        System.out.println();

        fillArray(a);
        System.out.println(average());

        Utils utils = new Utils(a);
        utils.arrayOut();
        utils.defineLength();
        utils.fillArray();
        System.out.println(utils.average());

        int[] b = utils.getSub();
        for (int i = 0; i < b.length; i++){
            System.out.print(b[i] + " ");
        }
        System.out.println();

        int[] c = {3, 4, 7, 10, 5 ,8};
        utils.setSub(c);
        System.out.println("Srednee arifmeticheskoe dobavlennogo massiva");
        System.out.println(utils.average());

        c = utils.sort(c);
        for (int i = 0; i < c.length; i++){
            System.out.print(c[i] + " ");
        }
        System.out.println();


    }

    public static void fillArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] % 3 == 0 && arr[i] != 0) {;
            System.out.println("Element kratnii 3: " + arr[i]);
            count++;
            System.out.println("Schetchik, opredeliauschii razmer podmassiva: " + count);
        }
    }

        sub = new int[count];
        count = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] % 3 == 0 && arr[i] != 0){
                sub[count] = arr[i];
                System.out.println("Dobavlennii element: " + sub[count]);
                count++;
            }
        }
}

public static double average() {
        double av = 0;
    for (int i = 0; i < sub.length; i++){
        av += sub[i];
    }
    return av/ sub.length;
}


}