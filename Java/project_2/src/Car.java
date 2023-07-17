public class Car {
    int price;
    double speed;
    String brand;

    public Car(int price, double speed, String brand) {
        this.price = price;
        this.speed = speed;
        this.brand = brand;
    }

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
    public void printOut () {
        System.out.println("price: " + price + " speed: " + speed + " brand: " + brand);
    }
}
