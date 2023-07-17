import java.util.Scanner;

public class Main {
    public static Integer square(Integer value){
        Integer result = value * value;
        return result;
    }

    public static void main(String[] args){
        System.out.println(square(12) + square(5));
    }
}
