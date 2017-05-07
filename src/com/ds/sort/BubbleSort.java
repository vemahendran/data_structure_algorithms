package com.ds.sort;

public class BubbleSort {

	 static void BubbleSort(int[] data) {
		int len = data.length;
		int tmpLen = len + 1;
		int tmp;

		for (int i = 0; i < len; i++) {
			for (int j = 1; j < (tmpLen - 1); j++) {
				if (data[j - 1] > data[j]) {
					tmp = data[j - 1];
					data[j - 1] = data[j];
					data[j] = tmp;
				}
				// System.out.print(data[j-1] + "\t");
			}
			// System.out.print(data[len-1] + "\n");
		}
	}

	public static void printArray(int[] arr) {
		for (int i = 0; i < arr.length; i++) {
			System.out.print(arr[i] + "\t");
		}
		System.out.print("\n");
	}

	public static void main(String[] args) {
		// Input data set
		int[] arr = { 8, 4, 6, 3, 67, 12, 4, 3, 1 };
		System.out.println("Before sorting:");
		printArray(arr);
		BubbleSort(arr);
		System.out.println("After sorting:");
		printArray(arr);

	}

}
