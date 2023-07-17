package package3;

public class Auto {
    public String BMW;     // Модификаторы доступа для переменных
    String Audi;
    protected String Mazda;
    private String Ford;

    public Auto(String BMW, String Audi, String Mazda, String Ford) {
        this.BMW = BMW;
        this.Audi = Audi;
        this.Mazda = Mazda;
        this.Ford = Ford;
    }
    public void printBMW(){       // Модификаторы доступа для методов

    }

    void printAudi(){

    }

    protected void printMazda(){
        System.out.println("Marka Mazda RX7");
    }

    private void printFord(){

    }
}
