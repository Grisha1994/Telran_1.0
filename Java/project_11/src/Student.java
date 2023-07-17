public class Student extends Human {

    private int course;
    private String homeWork;

    public Student(String name, int age, int course, String homeWork) {
        super(name, age);
        this.course = course;
        this.homeWork = homeWork;
    }

    public int getCourse() {
        return course;
    }

    public void setCourse(int course) {
        this.course = course;
    }

    public String getHomeWork() {
        return homeWork;
    }

    public void setHomeWork(String homeWork) {
        this.homeWork = homeWork;
    }

    @Override
    public void printClass() {
        System.out.println("Sdelan iz classa Student");
    }

    @Override
    public String toString() {
        return "Student{" +
                "name=" + super.getName() +
                ", age=" + super.getAge() +
                ", course=" + course +
                ", homeWork='" + homeWork + '\'' +
                '}';
    }
}
