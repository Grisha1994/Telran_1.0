public class Car {

    private int price;                 // Поля
    private double speed;
    private String brand;
    private short age;

    public Car(int price, double speed, String brand, short age) {    // Конструктор
        this.price = price;
        this.speed = speed;
        this.brand = brand;
        this.age = age;

    }

    public int getPrice() {                 // Аксессоры(геттеры и сеттеры) - доступ к переменным
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

    public short getAge() {
        return age;
    }

    public void setAge(short age) {
        this.age = age;
    }

    public String print(){                                       // Функция для вывода полей
        return "price: " + price + " speed: " + speed +
                " brand: " + brand + " age: " + age;
    }

    public void printOut(){                                     // Процедура для вывода полей
        System.out.println("price : " + price + " speed : "
                + speed + " brand : " + brand + " age: " + age);
    }


}
