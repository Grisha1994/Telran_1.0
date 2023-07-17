import java.awt.*;

public class Zero extends GameObject {

    private int x;
    private int y;

    public Zero(int x, int y) {
        this.x = x - 50;
        this.y = y - 50;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public void setX(int x) {
        this.x = x;
    }

    public void setY(int y) {
        this.y = y;
    }

    @Override
    public String toString() {
        return "Zero{" +
                "x=" + x +
                ", y=" + y +
                '}';
    }

    @Override
    public void draw(Graphics graphics) {



        graphics.setColor(Color.darkGray);

            graphics.drawOval(x, y, 100, 100);

        }

    @Override
    public void makePosition() {
        if(x <  200)
        {
            if (y < 200) {
                x = 50;
                y = 50;
            }
            if (200 <y && y < 400) {
                x = 50;
                y = 250;
            }
            if (400 < y && y < 600) {
                x = 50;
                y = 450;
            }
        }
        if(200<x && x < 400)
        {

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
        if(400<x && x<600)
        {
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

        System.out.println("Zero: " + x + " " + y);
    }
}
