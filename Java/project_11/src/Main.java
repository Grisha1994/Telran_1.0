public class Main {
    public static void main(String[] args) {

        Human human = new Human("Valeria", 23);
        Worker worker = new Worker("Dima", 35, "Manager", 3500);
        Student student = new Student("Vasya", 20, 3, "Tasks*");
        Teacher teacher = new Teacher("Zora", 21, "Teacher", 1000, "Matematik");
        Manager manager = new Manager("Zenya", 25, "Prodazi", 2100, 7);

        System.out.println(human.getName() + " " + human.getAge());
        System.out.println(worker.getName() + " " + worker.getAge() + " " + worker.getPosition() + " " + worker.getWage());
        System.out.println(student.getName() + " " + student.getAge() + " " + student.getCourse() + " " + student.getHomeWork());
        System.out.println(human);

        human.printClass();
        worker.printClass();
        student.printClass();

        System.out.println(worker);
        System.out.println(student);

        System.out.println(teacher.getName() + " " + teacher.getAge() + " " + teacher.getPosition() + " " + teacher.getWage() + " " + teacher.getSubject());
        System.out.println(manager.getName() + " " + manager.getAge() + " " + manager.getPosition() + " " + manager.getWage() + " " + manager.getExperienceWork());

        System.out.println(manager);
        System.out.println(teacher);


    }
}