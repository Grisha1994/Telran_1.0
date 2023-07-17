
public class ReverseArray {

    public static void main(String[] args) {

        String[] strings = new String[6];
        strings[0] = "One";
        strings[1] = "Two";
        strings[2] = "Three";
        strings[3] = "Four";
        strings[4] = "Five";
        strings[5] = "Six";


//        printArray(strings);
        revertArray(strings);
        printArray(strings);
//        revertArray2(strings);
//        printArray(strings);

    }


    private static void revertArray(String[] strings) {
        String tmpString;
        for (int i = 0; i < strings.length / 2; i++) {
            tmpString = strings[i];
            strings[i] = strings[strings.length - 1 - i];
            strings[strings.length - 1 - i] = tmpString;
        }
    }

//    private static void revertArray2(String[] strings) {
//        String tmpString;
//        for (int i = strings.length - 1; i > strings.length / 2; i--) {
//            tmpString = strings[i];
//            strings[i] = strings[strings.length - 1 - i];
//            strings[strings.length - 1 - i] = tmpString;
//        }
//
//    }

    private static void printArray(String[] strings) {
        for (int i = 0; i < strings.length; i++) {
            System.out.print(strings[i] + " ");
        }
        System.out.println();
    }
}
