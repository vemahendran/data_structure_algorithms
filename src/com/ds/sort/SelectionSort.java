package com.ds.sort;

public class SelectionSort {

	public static void SelectionSort(int[] arr) {
		int len = arr.length;

		for (int i = 0; i < len; i++) {
			int index = i;
			for (int j = i + 1; j < len; j++) {
				if (arr[index] > arr[j]) {
					index = j;
				}
			}
			if (index != i) {
				int tmp = arr[index];
				arr[index] = arr[i];
				arr[i] = tmp;
			}
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
		SelectionSort(arr);
		System.out.println("After sorting:");
		printArray(arr);

	}

}
