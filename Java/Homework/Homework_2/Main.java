public class Main {
    public static void main(String[] args) {
        Humans human = new Humans(28, "male", 174,
                "brunette" , "black", "Grisha");

        System.out.println("Age = " + human.getAge() + " Gender = " + human.getGender() + " Height = " + human.getHeight() +
                " Hair_type = " + human.getHair_type() + " Eye_color = " + human.getEye_color()+ " Name = " + human.getName());

        human.printOut();

        Humans human1 = new Humans(35, "famale", 170.5, "blonde" , "blue", "Liza");
        human1.printOut();

        human.setAge(30);
        System.out.println("Age = " + human.getAge() + " Gender = " + human.getGender() + " Height = " + human.getHeight() +
                " Hair_type = " + human.getHair_type() + " Eye_color = " + human.getEye_color()+ " Name = " + human.getName());


        System.out.println(human.print());

    }
}
