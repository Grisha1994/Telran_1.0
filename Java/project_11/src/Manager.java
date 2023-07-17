public class Manager extends Worker {
    private double experienceWork;

    public Manager(String name, int age, String position, double wage, double experienceWork) {
        super(name, age, position, wage);
        this.experienceWork = experienceWork;

    }

    public double getExperienceWork() {
        return experienceWork;
    }

    public void setExperienceWork(double experienceWork) {
        this.experienceWork = experienceWork;
    }

    @Override
    public String toString() {
        return "Manager{" +
                "\"name\"=" + super.getName() +
                ", age=" + super.getAge() +
                ", wage=" + super.getWage() +
                ", position='" + super.getPosition() +
                ", experienceWork=" + experienceWork +
                '}';
    }
}
