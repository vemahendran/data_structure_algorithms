package com.ds;

public class QueueArrayDemo {

	public static void main(String[] args) {
		
		QueueArray<Integer> queue = new QueueArray<Integer>(5);
		
		System.out.println("Dequeue: " + queue.deQueue());
		
		queue.enQueue(45);
		queue.enQueue(53);
		queue.enQueue(67);
		queue.enQueue(89);
		queue.enQueue(92);
		queue.enQueue(99);
		System.out.println("Dequeue: " + queue.deQueue());
		System.out.println("Dequeue: " + queue.deQueue());
		System.out.println("Dequeue: " + queue.deQueue());
	}

}
