package com.ds.collections;

public class Employee implements Comparable<Employee> {

	String name;
	int age;

	public Employee(String name, int age) {

		this.name = name;
		this.age = age;
	}

	@Override
	public int compareTo(Employee o) {
		if(this.age == o.age)
			return 0;
		else if(this.age > o.age)
			return 1;
		else
			return -1;
	}

}
