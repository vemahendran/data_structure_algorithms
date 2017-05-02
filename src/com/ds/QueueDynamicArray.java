package com.ds;

import java.util.Arrays;

public class QueueDynamicArray<T> {

	Object[] queue;
	int rear;
	int front;
	int size;

	public QueueDynamicArray(int size) {
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

	public void enQueue(T newItem) {
		ensureCapacity(rear + 2);
		rear = rear + 1;
		queue[rear] = newItem;
		if (front == -1) {
			front = 0;
		}
	}

	private void ensureCapacity(int minCapacity) {
		int oldCapacity = getSize();
		if (minCapacity > oldCapacity) {
			int newCapacity = oldCapacity * 2;
			if (newCapacity < minCapacity) {
				newCapacity = minCapacity;
			}
			queue = Arrays.copyOf(queue, newCapacity);
		}
	}

	public int getSize() {
		return queue.length;
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
