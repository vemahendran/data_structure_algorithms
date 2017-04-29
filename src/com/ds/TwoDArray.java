package com.ds;

public class TwoDArray {

	public static void main(String[] args) {

		int[][] data = new int[3][3];
		data[0][0] = 1;
		data[0][1] = 2;
		data[0][2] = 3;
		data[1][0] = 4;
		data[1][1] = 5;
		data[1][2] = 6;
		data[2][0] = 7;
		data[2][1] = 8;
		data[2][2] = 9;

		System.out.println("Original array:");
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				System.out.print(data[i][j]);
				System.out.print('\t');
			}
			System.out.print('\n');
		}

		System.out.println("Diagonal values on the array:");
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				if (i == j) {
					System.out.print(data[i][j]);
				}
				System.out.print('\t');
			}
			System.out.print('\n');
		}

		System.out.println("The upper deck values on diagonal:");
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				if (i < j) {
					System.out.print(data[i][j]);
				}
				System.out.print('\t');
			}
			System.out.print('\n');
		}

		System.out.println("The lower deck values on diagonal:");
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				if (i > j) {
					System.out.print(data[i][j]);
				}
				System.out.print('\t');
			}
			System.out.print('\n');
		}

		System.out.println("Middle column:");
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				if (j == 1) {
					System.out.print(data[i][j]);
				}
				System.out.print('\t');
			}
			System.out.print('\n');
		}

		System.out.println("Middle row:");
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				if (i == 1) {
					System.out.print(data[i][j]);
				}
				System.out.print('\t');
			}
			System.out.print('\n');
		}

		System.out.println("Both middle row and column:");

		for (int i = 0; i < data.length; i++) {
			for (int j = 0; j < data[i].length; j++) {
				if (i == (data.length / 2) || j == (data[i].length / 2)) {
					System.out.print(data[i][j]);
				}
				System.out.print('\t');
			}
			System.out.print('\n');
		}

		// System.out.println(data.length);

		System.out.println("Outer line:");

		for (int i = 0; i < data.length; i++) {
			for (int j = 0; j < data[i].length; j++) {
				if (i == 0 || i == data.length - 1 || j == data[i].length - 1 || j == 0) {
					System.out.print(data[i][j]);
				}
				System.out.print('\t');
			}
			System.out.print('\n');
		}

		System.out.println("Inner line:");

		for (int i = 0; i < data.length; i++) {
			for (int j = 0; j < data[i].length; j++) {
				if (!(i == 0 || i == data.length - 1 || j == data[i].length - 1 || j == 0)) {
					System.out.print(data[i][j]);
				}
				System.out.print('\t');
			}
			System.out.print('\n');
		}
	}

}
