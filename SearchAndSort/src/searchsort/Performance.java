package searchsort;

public class Performance {
    public static void analyze(){
        int[] data = Utils.generateArray(10000, 0, 10000);
        long startTime = System.nanoTime();
        SortAlgorithms.insertionSort(data.clone());
        long endTime = System.nanoTime();
        System.out.println("Insertion sort: " + (endTime - startTime) / 1000000 + "ms");

        data = Utils.generateArray(10000, 0, 10000);
        startTime = System.nanoTime();
        SortAlgorithms.quickSort(data, 0, data.length - 1);
        endTime = System.nanoTime();
        System.out.println("Quick sort: " + (endTime - startTime) / 1000000 + "ms");
    }
}
