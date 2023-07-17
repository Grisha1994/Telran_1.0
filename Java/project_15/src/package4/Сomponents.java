package package4;

import package3.Auto;

public class Сomponents extends Auto {

    public Сomponents(String BMW, String Audi, String Mazda, String Ford) {
        super (BMW, Audi, Mazda, Ford);
        Auto aObj = new Auto("E39", "100", "6", "Mustang");
        System.out.println("Auto - BMW " + aObj.BMW);
        System.out.println("Auto - Mazda " + super.Mazda);
        System.out.println("Auto - BMW " + super.BMW);
    }
    public void printAuto(){
        super.printMazda();
    }
}
