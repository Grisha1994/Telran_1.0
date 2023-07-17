public class Main {
    public static void main(String[] args) {

        int[] left = {1, 2, 3, 4, 5, 6, 7, 8, 9,};
        int[] right = {9, 8, 7, 6, 5, 4, 3, 2, 1};


        int n = 9;
        for (int i = 0; i < n; i++) {
            int headSpaceCount;

            if (i <= n / 2) {
                headSpaceCount = i;
            } else {
                headSpaceCount = n - i - 1;
            }

            int tailSpaceCount = headSpaceCount;
            int middleSpaceCount = n - headSpaceCount * 2 - 2;

            //TODO: используя код выше, написать логику расчета leftValue и rightValue
            int leftValue ;

            if (i <= n / 2) {
                leftValue = left[i];
            } else {
                leftValue = n - right[i];
            }

            int rightValue;

            if (i <= n / 2) {
                rightValue = right[i];
            } else {
                rightValue = n - left[i];
            }

            String s;

            if (i == n / 2) {
                s = " ".repeat(headSpaceCount) + leftValue + " ".repeat(tailSpaceCount);
            } else {
                s = " ".repeat(headSpaceCount) + leftValue + " ".repeat(middleSpaceCount) + rightValue
                        + " ".repeat(tailSpaceCount);
            }

            System.out.println(s);
        }



    }
}