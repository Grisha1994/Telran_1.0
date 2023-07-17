public class Humans {
    int Age;
    String Gender;
    double Height;
    String Hair_type;
    String Eye_color;
    String Name;

    public Humans(int age, String gender, double height, String hair_type, String eye_color, String name) {
        Age = age;
        Gender = gender;
        Height = height;
        Hair_type = hair_type;
        Eye_color = eye_color;
        Name = name;
    }

    public int getAge() {
        return Age;
    }

    public void setAge(int age) {
        Age = age;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public double getHeight() {
        return Height;
    }

    public void setHeight(double height) {
        Height = height;
    }

    public String getHair_type() {
        return Hair_type;
    }

    public void setHair_type(String hair_type) {
        Hair_type = hair_type;
    }

    public String getEye_color() {
        return Eye_color;
    }

    public void setEye_color(String eye_color) {
        Eye_color = eye_color;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }
    public void printOut () {
        System.out.println("Age: = " + Age + " Gender: = " + Gender + " Height: = " + Height +
                " Hair_type: = " + Hair_type + " Eye_color: = " + Eye_color+ " Name: = " + Name);
}
    public  String print() {
        return "Age:" + Age + "  Gender:" + Gender + "  Height:" + Height +
                "  Hair_type:" + Hair_type + "  Eye_color:" + Eye_color+ "  Name:" + Name;
    }
}
