package com.ds.collections;

import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;

public class QueuesDemo {

	public static void main(String[] args) {

		Queue<String> q = new LinkedList<String>();
		
		q.add("Venkat");
		q.add("Keerthi");
		q.add("Guna");
		q.add("Nithin");
		
		System.out.println("Basic queue:");
		System.out.println(q.poll());
		
		PriorityQueue<String> p = new PriorityQueue<String>();
		p.add("Venkat");
		p.add("Keerthi");
		p.add("Guna");
		p.add("Nithin");
		
		System.out.println("Priority queue:");
		System.out.println(p.poll());
		
		PriorityQueue<Employee> pEmployees = new PriorityQueue<Employee>();
		pEmployees.add(new Employee("Venkatesan", 29));
		pEmployees.add(new Employee("Keerthi", 3));
		pEmployees.add(new Employee("Nithin", 20));
		
		System.out.println("Priority queue for employees:");
		System.out.println(pEmployees.poll().name);
		
	}

}
