import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

class CalcTest {

    @BeforeAll   // Аннотации могут управлять работой программы
    public static void beforeAllTests(){
        System.out.println("Начало тестирования");
    }
    @BeforeEach
    public void beforeEachTests(){
        System.out.println("Тестирование началось");
    }

    Calculator calculator = new Calculator();
    @Test
    public void testSum(){
        System.out.println("Начало тестирования суммы");
        assertEquals(4, calculator.sum(2, 2));
    }

    @Test
    public void testSub(){
        System.out.println("Начало тестирования разности");
        assertEquals(1, calculator.sub(3, 2));
    }

    @Test
    public void testMul(){
        System.out.println("Начало тестирования умножения");
        assertEquals(4, calculator.mul(2, 2));
    }
    @Test
    public void testDiv(){
        System.out.println("Начало тестирования деления");
        assertEquals(3, calculator.div(6, 2));
    }

    @AfterEach
    public void afterEach(){
        System.out.println("Тест завершился");
    }

    @AfterAll
    public static void afterAllTests(){
        System.out.println("Тесты завершены");
    }
}