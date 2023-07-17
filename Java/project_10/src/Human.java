public class Human {
    private int age;
    private String name;
    private String surname;
    private String fathername;
    private char sex;


    public Human(int age, String name, String surname, String fathername, char sex) {
        this.age = age;
        this.name = name;
        this.surname = surname;
        this.fathername = fathername;
        this.sex = sex;
    }

    public Human(int age, String name, String surname, String fathername) {
        this.age = age;
        this.name = name;
        this.surname = surname;
        this.fathername = fathername;
    }

    public Human(int age, String name, String surname) {
        this.age = age;
        this.name = name;
        this.surname = surname;
    }

    public Human(String name, int i) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getFathername() {
        return fathername;
    }

    public char getSex() {
        return sex;
    }
}
