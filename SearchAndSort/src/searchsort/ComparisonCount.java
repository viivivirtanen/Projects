package searchsort;

public class ComparisonCount {
    private final long value;
    public static long comparisonCount = 0;
    public ComparisonCount(long value) {
        this.value = value;
    }
    public int compareTo(ComparisonCount other) {
        comparisonCount++;
        return Long.compare(value, other.value);
    }
    public long getValue() {
        return value;
    }

}
