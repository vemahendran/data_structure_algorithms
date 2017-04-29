package com.ds;

public class OneDAarray {

	public static void main(String args[]) {

		// array of numbers
		int[] numbers = new int[5];
		numbers[0] = 15;
		numbers[1] = 6;
		numbers[2] = 13;
		numbers[3] = 5;
		numbers[4] = 25;

		for (int i = 0; i < numbers.length; i++) {
			System.out.println(numbers[i]);
		}

		// array of objects
		Student[] students = new Student[5];
		students[0] = new Student("Venkatesan", 34);
		students[1] = new Student("Guna", 35);
		students[2] = new Student("Gayee", 30);
		students[3] = new Student("Nithin", 19);
		students[4] = new Student("Keerthi", 23);

		for (Student student : students) {
			System.out.println("name: " + student.name + " age: " + student.age);
		}

	}
}
