import javax.swing.*;
import java.util.AbstractList;
import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class Main {


    static Random random = new Random();
    static int[] lottery = new int[5];
    static Scanner scanner = new Scanner(System.in);
    static int[] bet = new int[5];
    static  JFrame jFrame  = new JFrame();

    public static void main(String[] args) throws InterruptedException {

        while (true) {

            JOptionPane.showMessageDialog(jFrame, "Это диалоговое окно");

            createLottery();
            makeBet();
            betOut();
            lotteryOut();
            checkBet();
            checkNumbers();

        }
    }
    public static void checkNumbers(){
        int count = 0;
        AbstractList<Integer> checkedPositions = new ArrayList<>();
        for (int i = 0; i < bet.length; i++) {
            for (int j = 0; j < lottery.length; j++) {
                if (bet[i] == lottery[j] && !checkedPositions.contains((j))){
                    count++;
                    checkedPositions.add(j);
                    break;
                }
            }
        }
        System.out.println("Vi ygadali: " + count + " chisel");
    }

    public static void checkBet(){
        int count = 0;
        for (int i = 0; i < bet.length; i++) {
            if (bet[i] == lottery[i]){
                count++;
            }
        }
        System.out.println("Vi ygadali po pozicii: " + count + " cifri");
    }

    public static void makeBet(){
        for (int i = 0; i < bet.length; i++) {
            bet[i] = Integer.parseInt(JOptionPane.showInputDialog(jFrame, "Enter your message"));
            JOptionPane.showMessageDialog(jFrame, "Вы ввели: " + bet[i]);
        }
    }
//    public static void makeBet(){
//        for (int i = 0; i < bet.length; i++) {
//            System.out.println("Vvedite stavky: ");
//            bet[i] = scanner.nextInt();
//        }
//    }

    public static void betOut() throws InterruptedException {
        System.out.println("Vasha stavka");
        for (int i = 0; i < bet.length; i++) {
            System.out.print(bet[i] + " ");
            Thread.sleep(500);
        }
        System.out.println();
    }

    public static void createLottery() {
        for (int i = 0; i < lottery.length; i++) {
            lottery[i] = random.nextInt(5) + 1;
        }
    }

    public static void lotteryOut() throws InterruptedException {
        System.out.println("Znachenie lotterei");
        for (int i = 0; i < lottery.length; i++) {
            System.out.print(lottery[i] + " ");
            Thread.sleep(500);
        }
        System.out.println();
    }
}