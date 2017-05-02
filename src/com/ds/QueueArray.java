package com.ds;

public class QueueArray<T> {

	Object[] queue;
	int rear;
	int front;
	int size;

	public QueueArray(int size) {
		this.size = size;
		queue = new Object[this.size];
		rear = -1;
		front = -1;
	}

	public Boolean isFull() {
		return (rear == size - 1);
	}

	public Boolean isEmpty() {
		return (front == -1 || front > rear);
	}

	public void enQueue(Object newItem) {
		if (isFull()) {
			System.out.println("Queue is full");
			return;
		}

		rear = rear + 1;
		queue[rear] = newItem;
		if (front == -1) {
			front = 0;
		}
	}

	public T deQueue() {

		if (isEmpty()) {
			System.out.println("Queue is empty");
			return null;
		}

		T removedItem = (T) queue[front];
		front = front + 1;

		return removedItem;
	}

}
