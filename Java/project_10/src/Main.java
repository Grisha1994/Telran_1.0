import java.util.Random;

public class Main {
    public static void main(String[] args) {

        print(10);
        print('s');

        Human Passport = new Human(25, "Zora", "Pypkin", "Ivanov");
        Human newPassport = new Human(25, "Zora", "Pypkin");

        System.out.println("Starii pasport " + Passport.getAge() + " " + Passport.getName() + " " +
                Passport.getSurname() + " " + Passport.getFathername());

        System.out.println("Novii pasport " + newPassport.getAge() + " " + newPassport.getName() + " " +
                newPassport.getSurname());

        Human sexPassport = new Human(25, "Zora", "Pypkin", "Ivanov", 'm');
        System.out.println("Pasport s polovim inditifikatorom " + sexPassport.getAge() + " " + sexPassport.getName() + " " +
                sexPassport.getSurname() + " " + sexPassport.getFathername() + " " + sexPassport.getSex());

        Human singlePassport = new Human("Nadya", 24);
        System.out.println("Паспорт с одним параметром: " + singlePassport.getName());


        ArrayWorking arrayWorking = new ArrayWorking(10);
        arrayWorking.insert(7);
        arrayWorking.printArray();

        arrayWorking.insert(9);
        arrayWorking.printArray();

        arrayWorking.arrRandom();
        arrayWorking.printArray();

        arrayWorking.clearArray();
        System.out.println("Massiv posle ydalenia:");
        arrayWorking.printArray();

        ArrayWorking arrayWorkingChar = new ArrayWorking();
        arrayWorkingChar.insert('c');
        arrayWorkingChar.printArrayChar();



}





    public static void print(int i){
        System.out.println("int: " + i);
    }
    public static void print(char c){
        System.out.println("char: " + c);
    }
}
