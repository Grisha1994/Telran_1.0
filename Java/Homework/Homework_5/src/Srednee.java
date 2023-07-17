public class Srednee {
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

    }

    public static void fillArray(int[] arr) {

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] % 3 == 0 && arr[i] != 0) {
                System.out.println("Element kratnii 3: " + arr[i]);
                count++;

            }
        }
        sub = new int[count];
        count = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] % 3 == 0 && arr[i] != 0){
                sub[count] = arr[i];
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