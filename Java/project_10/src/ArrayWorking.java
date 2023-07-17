import java.util.Random;

public class ArrayWorking {

    int[] arr;

    String[]  arrArray;
    char[] charArr;
    int count;

    Random random = new Random();



    public ArrayWorking(int size) {
        arr = new int[size];
        count = 0;
    }

    public ArrayWorking() {
        charArr = new char[10];
        count = 0;
    }

    public void insert(char value){
        charArr[count] = value;
        count++;
    }
    public void insert(int value){
        arr[count] = value;
        count++;
    }




    public void printArray(){
        for (int i = 0; i < count; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public void printArrayChar(){
        for (int i = 0; i < count; i++) {
            System.out.print(charArr[i] + " ");
        }
        System.out.println();
    }
    public void arrRandom(){
        count = 0;
        for (int i = 0; i < arr.length; i++){
            arr[i] = random.nextInt(10);
            count++;
        }
    }

    public void clearArray(){
        count = 0;
    }




}
