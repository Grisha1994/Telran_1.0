public class Worker extends Human{

    private double wage;
    private String position;

    public Worker(String name, int age, String position, double wage) {
        super(name, age);
        this.position = position;
        this.wage = wage;
    }

    public double getWage() {
        return wage;
    }

    public void setWage(double wage) {
        this.wage = wage;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    @Override
    public void printClass() {
        System.out.println("Sdelan iz classa Woker");
    }

    @Override
    public String toString() {
        return "Worker{" +
                "\"name\"=" + super.getName() +
                ", age=" + super.getAge() +
                ", wage=" + wage +
                ", position='" + position + '\'' +
                '}';
    }
}
