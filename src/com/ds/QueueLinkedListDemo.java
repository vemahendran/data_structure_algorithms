package com.ds;

public class QueueLinkedListDemo {

	public static void main(String[] args) {

		QueueLinkedList<String> q = new QueueLinkedList<String>();
		
		q.enQueue("Venkat");
		q.enQueue("Keerthi");
		q.enQueue("Nithin");
		
		System.out.println(q.deQueue());
		System.out.println(q.deQueue());
		System.out.println(q.deQueue());
		System.out.println(q.deQueue());
		

		
	}

}
