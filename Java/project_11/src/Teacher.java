public class Teacher extends  Worker{

    private String subject;

    public Teacher(String name, int age, String position, double wage, String subject) {
        super(name, age, position, wage);
        this.subject = subject;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "\"name\"=" + super.getName() +
                ", age=" + super.getAge() +
                ", wage=" + super.getWage() +
                ", position='" + super.getPosition() +
                ", subject='" + subject + '\'' +
                '}';
    }
}
