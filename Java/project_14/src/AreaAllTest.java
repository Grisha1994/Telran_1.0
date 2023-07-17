import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

class AreaAllTest {

    @BeforeAll   // Аннотации могут управлять работой программы
    public static void beforeAllTests(){
        System.out.println("Начало теста");
    }
    @BeforeEach
    public void beforeEachTests(){
        System.out.println("Тестирование началось");
    }

    AreaAll areaAll = new AreaAll();

    @Test
    public void testRectangle(){
        System.out.println("Начало тестирования площади прямоугольника");
        assertEquals(4, areaAll.rectangle(2, 2));
    }

    @Test
    public void testTriangle(){
        System.out.println("Начало тестирования площади треугольника");
        assertEquals(4, areaAll.triangle(4, 2));
    }

    @Test
    public void testСircle(){
        System.out.println("Начало тестирования площади круга");
        assertEquals(50.24, areaAll.circle(4));
    }

    @Test
    public void testPolygon(){
        System.out.println("Начало тестирования площади многоугольника");
        assertEquals(12, areaAll.polygon(4, 2, 4));
    }

    @Test
    public void testHexagon(){
        System.out.println("Начало тестирования площади шестиоугольника");
        assertEquals(41.569219381653056, areaAll.hexagon(4));
    }

    @Test
    public void testHexagonalPrism(){
        System.out.println("Начало тестирования площади шестиугольной призмы");
        assertEquals(64.9519052838329, areaAll.hexagonalPrism(2.5, 4));
    }

    @Test
    public void testPow(){
        System.out.println("Power");
        assertEquals(1.7320508075688772, areaAll.pow());
    }

    @AfterEach
    public void afterEach(){
        System.out.println("Тест завершен");
    }

    @AfterAll
    public static void afterAllTests(){
        System.out.println("Тесты завершены");
    }

}