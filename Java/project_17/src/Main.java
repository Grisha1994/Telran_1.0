import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.util.ArrayList;

// Наследуемся от класса JFrame. Он позволит нам создавать окно.
public class Main extends JFrame {
    // Создаю массив для работы с классом Zero. В кривых скобочках указываю тип, который будет храниться в массиве
    ArrayList<Zero> zeros = new ArrayList<>();
    // Создаю массив для работы с крестиками
    ArrayList<Cross> crosses = new ArrayList<>();



    int count = 1; // Счетчик нажатий
    int gameCount = 0; // Счетчик ходов

    public static void main(String[] args) {

        Main main = new Main(Res.TITLE);    // Создаем объект, который сделает окно. Передаем в конструктор название окна
        main.setSize(Res.WINDOW_WIDTH, Res.WINDOW_HEIGHT);      // Задаем размеры окна
        main.setResizable(false);   // Запрещаем менять размеры окна
        main.setVisible(true);     // Делаем окно видимым
    }
    // throws появился автоматически, он нужен для обработки непредвиденных ситуация, пока на него не обращаем внимания
    public Main(String title) throws HeadlessException {        // Создаем конструктор, который будет принимать название окна
        super(title);     // super - ссылка на класс родитель. Передаем в конструктор родителя название окна. Так нужно, чтобы окно работало.

        GameField panel = new GameField();     // Создаем объект для работы с игровой панелью. На основе внутреннего класса

        panel.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseReleased(MouseEvent e) {
                super.mouseReleased(e);    // Передаем событие классу родителю. Это нужно, чтобы код работал. Пока просто пишем так
                int x = e.getX();      // Получаем координаты нажатия мыши
                int y = e.getY();

                if(gameCount < 9  && emptyField(x, y)) {
                    System.out.println(x + " " + y);  // Выводим в консоль координаты нажатия


                    if (count == 1) {        // Если очередь нолика
                        Zero zero = new Zero(x, y); // Создаю объект для работы с ноликом
                        zero.makePosition();   // Центрирую координаты нолика
                        System.out.println(zero.getX() + " " + zero.getY() );
                        zeros.add(zero);  // Добавляю в массив(ArrayList) созданный объект
                        count = 2;        // Передаем очередь крестику
                    } else {                     //Если очередь креcтика


                        Cross cross = new Cross(x, y);
                        cross.makePosition();
                        crosses.add(cross);  // Добавляем крестик
                        count = 1;    // Передаем очередь нолику
                    }


                    panel.repaint(); // Перерисовка игровой панели, чтобы были видны изменения

                    gameCount++;
                }
                else{


                }
            }
        });


        setContentPane(panel);  // Добавляем элемент в окно.


    }

    private boolean checkZeroWin() {
        sortZerosByX();
        sortZeroByY();
        int points = 0;
        for (int i = 0; i < zeros.size()-1; i++) {
            if(zeros.get(i).getX() == zeros.get(i+1).getX() || zeros.get(i).getY() == zeros.get(i+1).getY()){
                points++;
                if(points == 2){
                    System.out.println("true");
                    return true;
                }

            } else {
                points = 0;
            }
        }
        if(occupyDiagZero()) {
            return true;
        }
        return false;
    }

    private boolean occupyDiagZero() {
        int[] arr = new int[6];
        int countD = 0;
        int points = 0;
        for (int i = 0; i < zeros.size(); i++) {
            if(zeros.get(i).getX() == zeros.get(i).getY()){
                arr[countD] = 1;
                if(zeros.get(i).getX() == 250 && zeros.get(i).getY() == 250) {
                    countD++;
                    arr[countD] =2;
                }
                countD++;

            }
            if(zeros.get(i).getX() ==  450 && zeros.get(i).getY() ==  50) {
                arr[countD] = 2;
                countD++;
            }


            if(zeros.get(i).getX() ==  50 && zeros.get(i).getY() ==  450) {
                arr[countD] = 2;
                countD++;
            }
        }

        for (int i = 0; i < arr.length; i++) {
            if(arr[i] == 1){
                points++;
                System.out.println("Points: " + points);
            }
            if(points == 3){
                return true;
            }
        }

        points = 0;
        for (int i = 0; i < arr.length; i++) {
            System.out.println("arr" + arr[i]);
            if(arr[i] == 2){
                points++;
                System.out.println("Points: " + points);
            }
            if(points == 3){
                return true;
            }
        }
        return false;
    }


    private boolean checkCrossWin() {
        sortCrossByX();
        sortCrossByY();
        int points = 0;
        for (int i = 0; i < crosses.size()-1; i++) {
            if(crosses.get(i).getX() == crosses.get(i+1).getX()  || crosses.get(i).getY() == crosses.get(i+1).getY()){
                points++;
                if(points == 2){
                    System.out.println("true");
                    return true;
                }
            }
            else {
                points = 0;
            }
        }
        if(occupyDiagCross()) {
            return true;
        }
        return false;
    }

    private boolean occupyDiagCross() {
        int[] arr = new int[6];
        int countD = 0;
        int points = 0;
        for (int i = 0; i < crosses.size(); i++) {
            if(crosses.get(i).getX() == crosses.get(i).getY()){
                arr[countD] = 1;
                if(crosses.get(i).getX() == 250 && crosses.get(i).getY() == 250) {
                    countD++;
                    arr[countD] =2;
                }
                countD++;

            }
            if(crosses.get(i).getX() ==  450 && crosses.get(i).getY() ==  50) {
                arr[countD] = 2;
                countD++;
            }


            if(crosses.get(i).getX() ==  50 && crosses.get(i).getY() ==  450) {
                arr[countD] = 2;
                countD++;
            }
        }

        for (int i = 0; i < arr.length; i++) {
            if(arr[i] == 1){
                points++;
                System.out.println("Points: " + points);
            }
            if(points == 3){
                return true;
            }
        }

        points = 0;
        for (int i = 0; i < arr.length; i++) {
            System.out.println("arr" + arr[i]);
            if(arr[i] == 2){
                points++;
                System.out.println("Points: " + points);
            }
            if(points == 3){
                return true;
            }
        }
        return false;
    }


    private void sortZerosByX() {
        Zero temp;
        for (int i = 0; i < zeros.size(); i++) {
            for (int j = 0; j < zeros.size(); j++) {
                if(zeros.get(i).getX() < zeros.get(j).getX()){
                    temp = zeros.get(i);
                    zeros.add(i, zeros.get(j));
                    zeros.remove(i+1);
                    zeros.add(j, temp);
                    zeros.remove(j+1);

                }
            }
        }
        System.out.println("Sort " + zeros);
    }
    private void sortZeroByY() {
        Zero temp;
        for (int i = 0; i < zeros.size(); i++) {
            for (int j = 0; j < zeros.size(); j++) {
                if(zeros.get(i).getY() < zeros.get(j).getY()){
                    temp = zeros.get(i);
                    zeros.add(i, zeros.get(j));
                    zeros.remove(i+1);
                    zeros.add(j, temp);
                    zeros.remove(j+1);

                }
            }
        }
        System.out.println("Sort " + zeros);
    }

    private void sortCrossByX() {
        Cross temp;
        for (int i = 0; i < crosses.size(); i++) {
            for (int j = 0; j < crosses.size(); j++) {
                if(crosses.get(i).getX() < crosses.get(j).getX()){
                    temp = crosses.get(i);
                    crosses.add(i, crosses.get(j));
                    crosses.remove(i+1);
                    crosses.add(j, temp);
                    crosses.remove(j+1);

                }
            }
        }
        System.out.println("Sort " + crosses);
    }
    private void sortCrossByY() {
        Cross temp;
        for (int i = 0; i < crosses.size(); i++) {
            for (int j = 0; j < crosses.size(); j++) {
                if(crosses.get(i).getY() < crosses.get(j).getY()){
                    temp = crosses.get(i);
                    crosses.add(i, crosses.get(j));
                    crosses.remove(i+1);
                    crosses.add(j, temp);
                    crosses.remove(j+1);

                }
            }
        }
        System.out.println("Sort " + crosses);
    }





    private boolean emptyField(int x, int y) {
        Zero centerCoordinate = new Zero(x, y);   // Приводим координаты к центру для этого создаем объект типа Zero. Он нужен только для центрирования координат
        centerCoordinate.makePosition();    // Центрируем координаты

        for (int i = 0; i < zeros.size(); i++) {    // Проверяем заняты ли координаты ноликами
            if(zeros.get(i).getX() == centerCoordinate.getX() &&
                    zeros.get(i).getY() == centerCoordinate.getY()){
                System.out.println("Место занято");
                return false;
            }
        }

        for (int i = 0; i < crosses.size(); i++) {          // Проверяем заняты ли координаты крестиками
            if(crosses.get(i).getX() == centerCoordinate.getX() &&
                    crosses.get(i).getY() == centerCoordinate.getY()){
                System.out.println("Место занято");
                return false;
            }
        }
        return true;
    }

    //Наследуемся от класса JPanel, чтобы нарисовать сетку и прослушать события нажатия кнопки мыши
    public class GameField extends JPanel{

        @Override
        public void paint(Graphics g) {       // Переопределяем метод paint для рисования. Класс Graphics - кисть для рисования
            super.paint(g);

            g.setColor(Color.GRAY);     // Устанавливаем цвет для кисти

            for (int i = Res.CELL_SIZE; i < Res.FIELD_SIZE ; i += Res.CELL_SIZE) {   // Цикл для прорисовки сетки
                g.drawLine(0, i, Res.FIELD_SIZE, i);        // Горизонтальные линии
                g.drawLine(i, 0, i, Res.FIELD_SIZE);        // Вертикальные линии
            }

            for (int i = 0; i < zeros.size(); i++) {   // Перебираем нолики
                zeros.get(i).draw(g);   // Отрисовываем каждый нолик. Обращаемся к массиву(ArrayList) zeros, чтобы получить i-й элемент.
                // Вызываем у этого элемент метод draw для отрисовки нолика и передаем ему кисть(g)
            }


            for (int i = 0; i < crosses.size(); i++) {   // Перебираем крестики
                crosses.get(i).draw(g);   // Отрисовываем каждый крестик. Обращаемся к массиву(ArrayList) crosses, чтобы получить i-й элемент.
                // Вызываем у этого элемент метод draw для отрисовки крестика и передаем ему кисть(g)
            }
            if(checkZeroWin()) {
                g.setColor(Color.RED);
                g.setFont(new Font("", Font.BOLD, 40));
                g.drawString("Победа ноликов", 150, 300);
            }
            if(checkCrossWin()) {
                g.setColor(Color.RED);
                g.setFont(new Font("", Font.BOLD, 40));
                g.drawString("Победа крестиков", 150, 300);
            }

        }
    }
}