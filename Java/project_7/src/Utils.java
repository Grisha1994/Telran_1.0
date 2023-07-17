//public class Utils {
//
//    int[] arr;     // Поля класса
//    static int count;
//    static int[] sub;
//
//    public Utils(int[] arr) {   // Конструктор, в который принимаем массив
//        this.arr = arr;   // Присваиваем массиву, переданный массив
//    }
//
//
//
//    public int[] sort(int[] arr){
//        int temp;
//        for (int i = 0; i < arr.length; i++) {
//            for (int j = 0; j < arr.length; j++) {
//                if (arr[i] < arr[j]){
//                    temp = arr[i];
//                    arr[i] = arr[j];
//                    arr[j] = temp;
//                }
//            }
//        }
//        return arr;
//    }
//
//
//    public  void arrayOut(){
//        for (int i = 0; i < arr.length; i++){
//            System.out.print("\n");
//        }
//    }
//
//    public void defineLength() {
//        count = 0;
//        for (int i = 0; i < arr.length; i++) {
//            if (arr[i] % 3 == 0 && arr[i] != 0) {
//                System.out.println("Element kratnii 3: " + arr[i]);
//                count++;
//                System.out.println("Schetchik, opredeliauschii razmer podmassiva: " + count);
//            }
//        }
//
//        sub = new int[count];
//    }
//    public void fillArray(){
//        count = 0;
//        for (int i = 0; i < arr.length; i++) {
//            if (arr[i] % 3 == 0 && arr[i] != 0){
//                sub[count] = arr[i];
//                System.out.println("Dobavlennii element: " + sub[count]);
//                count++;
//            }
//        }
//    }
//
//    public double average() {
//        double av = 0;
//        for (int i = 0; i < sub.length; i++){
//            av += sub[i];
//        }
//        return av/ sub.length;
//    }
//
//
//    public int getCount() {
//        return count;
//    }
//
//    public void setCount(int count) {
//        this.count = count;
//    }
//
//    public int[] getSub() {
//        return sub;
//    }
//
//    public void setSub(int[] sub) {
//        this.sub = sub;
//    }
//
//}
