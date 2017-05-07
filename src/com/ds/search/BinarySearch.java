package com.ds.search;

public class BinarySearch {
	public static void main(String[] args) {
		DataSet dataSet = new DataSet(100000000);
		int search = 99999999;
		Boolean isFound = false;

		// the formula is `mid = low + ((high-low)/2);`

		int low = 0;
		int mid = 0;
		int high = dataSet.getSize() - 1;

		while (!isFound) {
			dataSet.numberTry++;
			if (low > high) {
				System.out.println("The number doesn't exist.");
				break;
			}

			mid = low + ((high - low) / 2);
			// System.out.println("low: " + low);
			// System.out.println("high: " + high);
			// System.out.println("mid: " + mid);

			if (dataSet.data[mid] < search) {
				low = mid + 1;
			} else if (dataSet.data[mid] > search) {
				high = mid - 1;
			} else {
				System.out
						.println("The number has been found after " + dataSet.numberTry + " try.");
				isFound = true;
				break;
			}
		}
	}
}
