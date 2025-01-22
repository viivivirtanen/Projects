package searchsort;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan  = new Scanner(System.in);
        String choice;

        do{
            System.out.println("Menu of Searching and Sorting Testbed.");
            System.out.println();
            System.out.println("1) Linear Searching");
            System.out.println("2) Binary Searching");
            System.out.println("3) O(n^2) Type of Sorting");
            System.out.println("4) O(n*log(n)) Type of Sorting");
            System.out.println("5) Sorting Performance");
            System.out.println();
            System.out.println("q/Q) Quit");
            System.out.println();
            System.out.print("Your choice: ");
            choice = scan.nextLine().trim();

            if (choice.equalsIgnoreCase("q")) {
                System.out.println("Exiting the program...");
                break;
            }
            if (isNumeric(choice)) {
                int numericChoice = Integer.parseInt(choice);
                switch (numericChoice) {
                    case 1 -> {
                        System.out.println("In the list there are values from 0,...,9; which value would you like to search with linear search? ");
                        int target = scan.nextInt();
                        scan.nextLine();
                        int[] data = Utils.generateArray(10, 0, 9);
                        boolean found = SearchAlgorithms.linearSearch(data, target);
                        System.out.println((found ? "Found" : "Not Found"));
                        System.out.println();
                    }
                    case 2 -> {
                        System.out.println("In the list there are values from 0,...,9. Enter a number to search: ");
                        int target = scan.nextInt();
                        scan.nextLine();
                        int[] data = Utils.generateArray(10, 0, 9);
                        Utils.sortArray(data);
                        boolean found = SearchAlgorithms.binarySearch(data, target);
                        System.out.println((found ? "Found" : "Not Found"));
                    }
                    case 3 -> {
                        int[] data = Utils.generateArray(10, 0, 100);
                        System.out.println("Data set before insertion sort:" + Utils.arrayToString(data));
                        SortAlgorithms.insertionSort(data);
                        System.out.println("Data set after insertion sorting:" + Utils.arrayToString(data));
                    }
                    case 4 -> {
                        int[] data = Utils.generateArray(10, 0, 100);
                        System.out.println("Data set before quicksort:" + Utils.arrayToString(data));
                        SortAlgorithms.quickSort(data, 0, data.length - 1);
                        System.out.println("Data set after quicksort:" + Utils.arrayToString(data));
                    }
                    case 5 -> {
                        Performance.analyze();
                    }
                    default -> System.out.println("Invalid choice");
                }
            } else {
                System.out.println("Invalid choice");
            }
            System.out.println();
        }
        while(true);
    }
    private static boolean isNumeric(String str) {
        if (str == null || str.isEmpty()) {
            return false;
        }
        for (char c : str.toCharArray()) {
            if (!Character.isDigit(c)) {
                return false;
            }
        }
        return true;
    }
}
