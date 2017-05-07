package com.ds.sort;

public class QuickSort {

	public static void QuickSort(int[] arr, int low, int high) {

		if (low > high) {
			return;
		}

		int mid = low + (high - low) / 2;
		int pivot = arr[mid];

		int i = low;
		int j = high;

		while (i <= j) {
			while (arr[i] < pivot) {
				i++;
			}
			while (arr[j] > pivot) {
				j--;
			}
			if (i <= j) {
				int tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
				i++;
				j--;
			}
		}

		if (low < j) {
			QuickSort(arr, low, j);
		}

		if (high > i) {
			QuickSort(arr, i, high);
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
		int[] arr = { 8, 4, 6, 2, 67, 12, 4, 3, 1 };
		System.out.println("Before sorting:");
		printArray(arr);
		QuickSort(arr, 0, arr.length - 1);
		System.out.println("After sorting:");
		printArray(arr);

	}
}
