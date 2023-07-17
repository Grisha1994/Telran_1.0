import java.awt.*;

public class Cross extends GameObject {

    private int x;
    private int y;

    public Cross(int x, int y){
        this.x = x - 50;
        this.y = y - 50;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    @Override
    public String toString() {
        return "Cross{" +
                "x=" + x +
                ", y=" + y +
                '}';
    }

    @Override
    public void draw(Graphics graphics) {


        graphics.setColor(Color.darkGray);

        graphics.drawLine(x, y, x + 100, y + 100);
        graphics.drawLine(x , y + 100, x + 100, y );


    }


    @Override
    public void makePosition() {    // Центрирование координат
        if (x < 200) {
            if (y < 200) {
                x = 50;
                y = 50;
            }
            if (200 < y && y < 400) {
                x = 50;
                y = 250;
            }
            if (400 < y && y < 600) {
                x = 50;
                y = 450;
            }
        }
        if (200 < x && x < 400) {
            if (y < 200) {
                x = 250;
                y = 50;
            }
            if (200 < y && y < 400) {
                x = 250;
                y = 250;
            }
            if (400 < y && y < 600) {
                x = 250;
                y = 450;
            }
        }
        if (400 < x && x < 600) {
            if (y < 200) {
                x = 450;
                y = 50;
            }
            if (200 < y && y < 400) {
                x = 450;
                y = 250;
            }
            if (400 < y && y < 600) {
                x = 450;
                y = 450;
            }
        }
    }
}