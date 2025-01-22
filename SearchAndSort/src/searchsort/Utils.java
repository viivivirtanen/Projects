package searchsort;
import java.util.*;

public class Utils {
    public static int[] generateArray(int size, int min, int max) {
        Random r = new Random();
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            list.add( r.nextInt(max - min + 1) + min);
        }
        Collections.shuffle(list, r);
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = list.get(i);
        }
        return arr;
    }
    public static ComparisonCount[] generateComparisonArray(int size, int min, int max) {
        Random random = new Random();
        ComparisonCount[] arr = new ComparisonCount[size];
        for (int i = 0; i < size; i++) {
            arr[i] = new ComparisonCount(random.nextInt(max - min + 1) + min);
        }
        return arr;
    }
    public static String arrayToString(int[] arr) {
        StringBuilder sb = new StringBuilder();
        for (int num : arr) {
            sb.append(num).append(" ");
        }
        return sb.toString().trim();
    }
    public static void sortArray(int[] arr) {
        java.util.Arrays.sort(arr);
    }
}
