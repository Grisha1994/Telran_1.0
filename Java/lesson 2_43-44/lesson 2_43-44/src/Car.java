public class Car { //Создали новый класс

    private int price;                    //Поля класса(свойства)
    private double speed;
    private String brand;                 //String - строка(набор символов)

    public Car(int price, double speed, String brand) {       // Создали конструктор.  Метод, который создает экземпляр
                                                              // класса(объект). У конструкторов особая сигнатура
        this.price = price;
        this.speed = speed;
        this.brand = brand;                                   // this - ссылка на текущий экземпляр

    }

    //Акссесоры(набор геттеров и сеттеров) геттер - метод для получения значения, сеттер - метод для его изменения
    // у объекта



    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public double getSpeed() {
        return speed;
    }

    public void setSpeed(double speed) {
        this.speed = speed;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void printOut(){
        System.out.println("price : " + price + " speed : " + speed + " brand : " + brand);
    }



}





