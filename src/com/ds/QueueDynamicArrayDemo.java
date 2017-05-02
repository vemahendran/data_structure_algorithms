package com.ds;

public class QueueDynamicArrayDemo {

	public static void main(String[] args) {
		QueueDynamicArray<Integer> q = new QueueDynamicArray<Integer>(2);
		
		System.out.println(q.deQueue());
		
		q.enQueue(13);
		System.out.println(q.getSize());
		q.enQueue(15);
		System.out.println(q.getSize());
		q.enQueue(17);
		q.enQueue(13);
		System.out.println(q.getSize());
		q.enQueue(15);
		System.out.println(q.getSize());
		q.enQueue(17);
	}

}
